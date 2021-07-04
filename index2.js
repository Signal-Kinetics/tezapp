import { BeaconWallet } from "@taquito/beacon-wallet";
import { Tezos } from "@taquito/taquito";

const contractAddress = "KT1PCLg8Da8T5hSWibMopPVsxiKg27tSRxx";

window.onload = () => {
    document.getElementById("init-wallet").onclick = initWallet;
};

const updateInnerText = (id, text) =>
    (document.getElementById(id).innerText = text);

const initWallet = async () => {
    try {
        Tezos.setProvider({ rpc: 'https://carthagenet.SmartPy.io' });
        const options = {
            name: "Taquito & Beacon SDK",
            eventHandlers: {
                OPERATION_REUEST_SUCCESS: {
                    handler: async (data) => {
                        console.log("Request successful: ", data);
                        showToast("Request successful!");
                    }
                }
            }
        };
        const wallet = new BeaconWallet(options);
        const network = {
            type: "carthagenet"
        };
        await wallet.requestPermissions({ network });
        Tezos.setWalletProvider(wallet);

        // Update dapp interface/View (mVc) with user address
        userAddress = wallet.permissions.address;
        userBalance = await Tezos.tz.getBalance(userAddress);
        contractInstance = await Tezos.wallet.at(contractAddress);
        const storage = await contractInstance.storage();

        // Hides Connect Button
        document.getElementById("interface").style.display = "none";
        // shows and populates contract interface
        updateInnerText("user-balance", userBalance / 1000000);
        updateInnerText("current-message", storage.message);
        updateInnerText("current-value", storage.integer);
    } catch(error) {
        console.log("Error: " + error);
    }
}

window.onload = () => {
    document.getElementById("update-message").onclick = changeMessage;
};

const changeMessage = async () => {
    // Disables confirmation button after first click
    document.getElementById("update-message").disabled = true;

    // Displays loader
    document.getElementById("loader").style.display = "block";
    const message = document.getElementById("new-message").value;

    try {
        const op = await contractInstance.methods.changeMessage(message).send();
        await op.confirmation();

    } catch (error) {
        console.log(error);
    } finally {
        document.getElementById("update-message").disabled = false;
        document.getElementsById("loader").style.display = none;
    }
};

const showToast = (msg) => {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    setTimeout(() => {
        toast.className = "show";
        setTimeout(() => {
            toast.className = toast.className.replace("show", "");
        }, 3000);
    }, 3000);
};