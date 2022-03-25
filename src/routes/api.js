const express = require("express");
const coins = require("./coins.router");

const api = express.Router();

api.use("/coins", coins);

module.exports = api;
