const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const setupSocket = require("./socket");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  transports: ["websocket"],
});

setupSocket(io);

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
