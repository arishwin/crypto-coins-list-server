const express = require("express");

const app = express();
const cors = require("cors");
const api = require("./routes/api");
const morgan = require("morgan");

app.use(cors());

app.use(morgan("combined"));
app.use(express.json());
app.use("/v1", api);

module.exports = app;
