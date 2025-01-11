const users = new Map();

function addUser(socketId, username) {
  users.set(socketId, { username, online: true });
}

function removeUser(socketId) {
  users.delete(socketId);
}

function getAllUsers() {
  return Array.from(users.values());
}

module.exports = { addUser, removeUser, getAllUsers };
