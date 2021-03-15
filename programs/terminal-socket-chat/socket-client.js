const io = require("socket.io-client");
const { info, log } = require("clear-logs");

const socket = io("http://localhost:3000");

const run = () => {
  socket.on("connect", () => {
    info(`socket.io client connected`);
  });

  socket.on("chat-message", (message, id) => {
    log(`${id}: ${message}`);
  });

  process.stdin.on("data", (data) => {
    socket.emit("chat", data.toString().trim());
  });
};

run();
