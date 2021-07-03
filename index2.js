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
            name: "Taquito & Beacon SDK"
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