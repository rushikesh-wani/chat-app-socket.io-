import { Send, Smile, User } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import formatTime from "../utils/formatTime";
import { scrollTOBottom } from "../utils/helperFunction";
import LoginModal from "../components/LoginModal";
import UsersList from "../components/UsersList";
import ChatBox from "../components/chats/ChatBox";
import TypingIndicator from "../components/chats/TypingIndicator";
import MessageInputForm from "../forms/MessageInputForm";

const socket = io(process.env.REACT_APP_SOCKET_URL, {
  transports: ["websocket"],
});

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [typing, setTyping] = useState("");
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  const chatBox = useRef(null);
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    socket.on("typing", (data) => {
      if (data !== username) {
        setTyping(`${data} is typing...`);
        setTimeout(() => setTyping(""), 2000);
      }
    });

    socket.on("update_users", (users) => {
      setUsers(users);
    });

    return () => {
      socket.off("receive_message");
      socket.off("typing");
      socket.off("update_users");
    };
  }, [username]);

  const sendMessage = (e) => {
    e.preventDefault();
    const data = { username, message, time: new Date() };
    socket.emit("send_message", data);
    setMessage("");
  };

  const handleTyping = () => {
    socket.emit("typing", username);
  };

  const handleSetUsername = (e) => {
    e.preventDefault();
    socket.emit("set_username", username);
    setIsModalOpen(false);
  };

  useEffect(() => {
    scrollTOBottom(chatBox);
  }, [chat]);

  return (
    <div className="flex flex-col items-center p-5 bg-black text-white min-h-screen">
      {isModalOpen && (
        <LoginModal
          username={username}
          setUsername={setUsername}
          handleSetUsername={handleSetUsername}
        />
      )}
      {!isModalOpen && (
        <>
          <div className="w-full md:w-1/2 border-b border-gray-800 pb-4">
            <h2 className="text-lg text-center font-bold mb-2">Chat App</h2>
            <UsersList users={users} />
          </div>

          <ChatBox chat={chat} username={username} />
          <TypingIndicator typing={typing} />
          <MessageInputForm
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            handleTyping={handleTyping}
          />
        </>
      )}
    </div>
  );
};

export default ChatPage;
