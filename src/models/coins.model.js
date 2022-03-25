const NodeCache = require("node-cache");
const axios = require("axios");

const cache = new NodeCache();

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function loadCoins() {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/list"
  );
  let coins = [];
  // fetch detail for each coin in coinsList
  for (let i = 0; i < 20; i++) {
    console.log("sleeping for 5 seconds");
    // sleep for 5 seconds to avoid exceeding the API limit
    await sleep(5000);
    const coin = response.data[i];
    if (coin.id) {
      const coinDetail = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin.id}`
      );
      // add object to coins array
      coins.push({
        id: coinDetail.data.id,
        name: coinDetail.data.name,
        price: coinDetail.data.market_data.current_price.myr,
        symbol: coinDetail.data.symbol,
        image: coinDetail.data.image.large,
      });

      console.log(`${coinDetail.data.name} added to coins array`);
    }
  }
  cache.set("coins", coins);
}

async function getAllCoins() {
  return cache.get("coins");
}

module.exports = {
  loadCoins,
  getAllCoins,
};
