const { addUser, removeUser, getAllUsers } = require("./users");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Handle setting username
    socket.on("set_username", (username) => {
      addUser(socket.id, username);
      io.emit("update_users", getAllUsers());
    });

    // Handle sending messages
    socket.on("send_message", (data) => {
      io.emit("receive_message", data);
    });

    // Handle typing notification
    socket.on("typing", (data) => {
      socket.broadcast.emit("typing", data);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
      removeUser(socket.id);
      io.emit("update_users", getAllUsers());
    });
  });
};
