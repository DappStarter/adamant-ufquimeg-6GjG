require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth stereo soda install enter flock sound'; 
let testAccounts = [
"0x2d6f57be6147f6f8659787a53bcb2a46457e162248fe7c1ef0e1d8133ba366bb",
"0x536d1212ac8ab3ca543866110a5ec57fe440f93cfb8bcc03c3435a723fdb660a",
"0x756298f6d2050634dd08bb759ee31a65cf2317217d1a417d362e19738ab4f7ee",
"0xb95929d76b108949de3203d2d3ac34e98a12cf5bf677dc728630626ecbd26d87",
"0xe2144030c51b5a0188f46d9be9064855e984378067a2178c64290d5bece093dd",
"0x8130b24f6f5663237eb7523ad9bb069b73ace6b1fedccb1d9a4f1a26367319fc",
"0x76f16f0b811eedc6e3ce4095a5e28bcc6426d176c319e367be743e367d3afe7e",
"0xeeeee4d169f83701205c8a8cd3d0a112eef9a1fe10d4f5020576740012af1b23",
"0xfa08930dd6f74b672c2c19ac62ca70058769cf82010c03e076b77152116a5d25",
"0xca70d33f503f97f383661690ee60da0ec8f75b6cd04d537cd3c4f70d906d9bbb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

