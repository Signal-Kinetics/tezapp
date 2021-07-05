import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';

const Tezos = new TezosToolkit('https://testnet-tezos.giganode.io');

const options = {
    name: 'My Tezos Dapp',
    iconUrl: 'https://tezostaquito.io/img/favicon.png',
    preferredNetwork: 'florencenet',
    eventHandlers: {
        PERMISSION_REQUEST_STATUS: {
            handler: async (data) => {
                console.log('permission data:', data);
            },
        },
    },
};
const wallet = new BeaconWallet(options);
await wallet.requestPermissions({
    network: {
      type: 'mainnet' | 'florencenet' | 'edonet' | 'custom',
    },
  });
const userAddress = await wallet.getPKH();
Tezos.setWalletProvider(wallet);