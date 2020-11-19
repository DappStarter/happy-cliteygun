require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stomach renew place million just desert fortune gesture'; 
let testAccounts = [
"0xf42e159e9c9e619dd4ce16876e67792bf50459721f90faaceeb9e41a55847939",
"0x7c25894ab9d4ff3bbb116c4ee165511170151599ebb6039bd9d8e92990db0990",
"0x18d55e02b3470d963d256c065c05eb4ba206b9dd2ae6e544c9cb996108c9971f",
"0xca5c464a53a123fe9ac6cfeddbd2ac651f076d7d4330e4513b652e1ac67bf4f8",
"0xf84926573a8d9824ab429fb20877db498e4ac5098545788cfd9d9fc377348d01",
"0x51d3bac202b5444199439259dfac6daa53faa956c7411c6f65a0b754afbc7197",
"0x2e2fc401cbc7394d4007a66ee1ffa076979c159ffb59128588bc09a7116e8e6e",
"0xa7bb878688b0060d3fb420c541aae8cad4d8740ff3eef4bd005af1926f9563dd",
"0x088f6d0eb1a6cee6e60d4a4800985236c75ad06fe50a685a024f083b862ee824",
"0x883132f682f6f88620d9257a63ddf6f87688be07cbd4fb7153e0e519587d6e74"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
