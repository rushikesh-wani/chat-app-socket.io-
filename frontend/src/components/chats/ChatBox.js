import React, { useRef, useEffect } from "react";
import MessageItem from "./MessageItem";
import { scrollTOBottom } from "../../utils/helperFunction";

const ChatBox = ({ chat, username }) => {
  const chatBox = useRef(null);

  useEffect(() => {
    scrollTOBottom(chatBox);
  }, [chat]);

  return (
    <div
      ref={chatBox}
      className="chat-box w-full h-96 md:w-1/2 p-3 overflow-y-scroll mt-4 bg-gray-800/50 rounded-xl"
    >
      {chat.map((msg, idx) => (
        <MessageItem key={idx} msg={msg} username={username} />
      ))}
    </div>
  );
};

export default ChatBox;
