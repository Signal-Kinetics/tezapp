import { BeaconWallet } from "@taquito/beacon-wallet";
import { Tezos } from "@taquito/taquito";

const contractAddress = "";

window.onload = () => {
    document.getElementById("init-wallet").onclick = initWallet;
};

const updateInnerText = (id, text) =>
    (document.getElementById(id).innerText = text);

const initWallet = async () => {
    try {
        Tezos.setProvider({ rpc: `https://carthagenet.SmartPy.io` });
        const options = {
            name: "Beacon SDK Integration"
        };
        const wallet = new BeaconWallet(options);
        const network = {
            type: "carthagenet"
        };
        await wallet.requestPermissions({ network });
        Tezos.setWalletProvider(wallet);

        // Update dapp interface with user metadata
        userAddress = wallet.permissions.address;
        userBalance = await Tezos.tz.getBalance(userAddress);
        contractInstance = await Tezos.wallet.at(contractAddress);
        const storage = await cntractInstance.storage();

        // Hides "connect" button
        document.getElementById("connection").style.display = "none";

        // Shows and populates the contract interface
        document.getElementById("interface").style.display = "block";
        updateInnerText("user-address", userAddress);
        updateInnerText("user-balance", userBalance / 1000000);
        updateInnerText("current-message", storage.message);
        updateInnerText("current-value", storage.integer);
    } catch (error) {
        console.log(error);
    }
}