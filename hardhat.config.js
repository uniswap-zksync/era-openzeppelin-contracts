require('@matterlabs/hardhat-zksync-solc')
require('@matterlabs/hardhat-zksync-verify')

module.exports = {
  networks: {
    zkSyncLocalhost: {
      url: 'http://localhost:3050',
      ethNetwork: 'http://localhost:8545',
      zksync: true,
    },
    zkSyncTestnet: {
      url: 'https://testnet.era.zksync.dev',
      ethNetwork: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      zksync: true,
      verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification',
    },
    zkSyncTestnetSepolia: {
      url: 'https://sepolia.era.zksync.dev',
      ethNetwork: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      zksync: true,
      verifyURL: 'https://explorer.sepolia.era.zksync.dev/contract_verification',
    },
    zkSyncMainnet: {
      url: 'https://mainnet.era.zksync.io',
      ethNetwork: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      zksync: true,
      verifyURL: 'https://zksync2-mainnet-explorer.zksync.io/contract_verification'
    },
  },
  defaultNetwork: 'zkSyncLocalhost',
  solidity: {
    version: '0.7.4',
  },
  zksolc: {
    version: '1.3.13',
    compilerSource: 'binary',
    settings: {},
  },
}
