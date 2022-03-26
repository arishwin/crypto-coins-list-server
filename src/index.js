// create a node.js server
const cron = require("node-cron");
const http = require("http");
const app = require("./app");
const { loadCoins } = require("./models/coins.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  loadCoins().then(() => {
    console.log("Coins loaded");
  });

  cron.schedule("0 7 * * *", () => {
    console.log("Retrieving coins data");
    loadCoins();
  });

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
