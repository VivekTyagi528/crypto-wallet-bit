import toast from "react-hot-toast";
export const PROVIDER = "https://data-seed-prebsc-1-s1.binance.org:8545/";

export const copyToClipBoard = async (copyMe) => {
  if (!copyMe) {
    return;
  }
  try {
    await navigator.clipboard.writeText(copyMe);
    toast.success("Copied to Clipboard !");
  } catch (err) {
    toast.error("copy failed");
  }
};

export const BASECOVALENT = "https://api.covalenthq.com/v1";
export const NETWORKS = [
  {
    id: 1,
    rpc: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMYKEY}`,
    text: "Polygon Mainnet",
    chain: 137,
    explorer: "https://polygonscan.com",
  },
  {
    id: 2,
    rpc: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMYKEY}`,
    text: "Polygon Testnet",
    chain: 80001,
    explorer: "https://mumbai.polygonscan.com",
  },
  {
    id: 3,
    rpc: `https://eth-goerli.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMYKEY}`,
    text: "Goerli Testnet",
    chain: 5,
    explorer: "https://goerli.etherscan.io/",
  },
  {
    id: 4,
    rpc: `https://eth-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMYKEY}`,
    text: "Ethereum Mainnet",
    chain: 1,
    explorer: "https://etherscan.io/",
  },
  {
    id: 5,
    rpc: ` https://opt-mainnet.g.alchemy.com/v2${process.env.REACT_APP_ALCHEMYKEY}`,
    text: "Optimism Mainnet",
    chain: 10,
    explorer: "https://optimistic.etherscan.io",
  },
  {
    id: 6,
    rpc: `https://arb-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMYKEY}`,
    text: "Arbitrum Mainnet",
    chain: 42161,
    explorer: "https://arbiscan.io/",
  },
  {
    id: 7,
    rpc: `https://arb-goerli.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMYKEY}`,
    text: "Arbitrum Testnet",
    chain: 421613,
    explorer: "https://testnet.arbiscan.io/",
  },
  {
    id: 8,
    rpc: `https://opt-kovan.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMYKEY}`,
    text: "Optimism Kovan",
    chain: 69,
    explorer: "https://kovan-optimistic.etherscan.io",
  },
];
