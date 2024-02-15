import express from "express";
import Moralis from "moralis";
import fetch from "node-fetch";

const app = express();

import cors from "cors";
import "dotenv/config.js";
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/getTokens", async (req, res) => {
  const { userAddress, chain } = req.query;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-Key": process.env.MORALIS_KEY,
    },
  };

  // Using "node-fetch" to retrieve the tokens
  // beacuse "moralis" does not return all tokens
  let tokens = null;
  await fetch("https://deep-index.moralis.io/api/v2.2/wallets/0x8fAaaeCC05c089aa467Be6357478a530ae33FFFd/tokens?chain=eth", options)
    .then((response) => response.json())
    .then((response) => (tokens = response.result))
    .catch((err) => console.error(err));

  // Using "moralis" to retrieve the NFTs
  const nfts = await Moralis.EvmApi.nft.getWalletNFTs({
    chain: chain,
    address: userAddress,
    mediaItems: true,
  });

  const myNfts = nfts.raw.result.map((e, i) => {
    if (e?.media?.media_collection?.high?.url && !e.possible_spam && e?.media?.category !== "video") {
      return e["media"]["media_collection"]["high"]["url"];
    }
  });

  // Using "moralis" to retrieve the balance
  const balance = await Moralis.EvmApi.balance.getNativeBalance({
    chain: chain,
    address: userAddress,
  });

  const jsonResponse = {
    tokens: tokens,
    nfts: myNfts,
    balance: balance.raw.balance / 10 ** 18,
  };

  return res.status(200).json(jsonResponse);
});

Moralis.start({
  apiKey: process.env.MORALIS_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});
