const { getAllCoins } = require("../models/coins.model");

async function httpGetAllCoins(req, res) {
  return res.status(200).json(await getAllCoins());
}

module.exports = {
  httpGetAllCoins,
};
