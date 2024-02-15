const Ethereum = {
  hex: "0x1",
  name: "Ethereum",
  rpcUrl: "https://eth-mainnet.g.alchemy.com/v2/demo",
  ticker: "ETH",
};

const Polygon = {
  hex: "0x89",
  name: "Polygon",
  rpcUrl: "",
  ticker: "ETH",
};
const Avalanche = {
  hex: "0xa86a",
  name: "Avalanche",
  rpcUrl: "",
  ticker: "ETH",
};

const SepoliaTestnet = {
  hex: "0xaa36a7",
  name: "Ethereum Sepolia",
  rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/demo",
  ticker: "SEPOLIA",
};

export const CHAINS_CONFIG = {
  "0x1": Ethereum,
  "0xa86a": Avalanche,
  "0x89": Polygon,
  "0xaa36a7": SepoliaTestnet,
};
