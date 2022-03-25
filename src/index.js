// create a node.js server

const http = require("http");
const app = require("./app");
const { loadCoins } = require("./models/coins.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  loadCoins().then(() => {
    console.log("Coins loaded");
  });

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
