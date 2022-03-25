const express = require("express");
const { httpGetAllCoins } = require("../controllers/coins.controller");

const coinsRouter = express.Router();

coinsRouter.get("/", httpGetAllCoins);

module.exports = coinsRouter;
