const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    cersei: {
      network_id: "*",
      gas: 0,
      gasPrice: 0,
      port: 3200,
      provider: new HDWalletProvider(fs.readFileSync('/home/kapoor13/Desktop/lasttry/broz.env', 'utf-8'), "https://electionblock.blockchain.azure.com:3200/_attj5N54l3xT2wOB6HmDe32"),
      consortium_id: 1566327766942
    }
  },
  compilers: {
    solc: {
      version: "0.5.0"
    }
  },
};
