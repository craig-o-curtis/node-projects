const { createServer } = require("http");
const socketIO = require("socket.io");
const { info, log } = require("clear-logs");

const PORT = 3000;

const run = () => {
  const server = createServer().listen(PORT);
  const io = socketIO(server);

  io.on("connection", (socket) => {
    info(`${io.engine.clientsCount} connections`);

    socket.on("chat", (message) => {
      log(`${socket.id}: ${message}`);
      io.sockets.emit("chat-message", message, socket.id);
    });

    socket.on("disconnect", () => {
      info(`disconnected: ${socket.id}`);
    });
  });

  info(`Socket server running`);
};

run();
