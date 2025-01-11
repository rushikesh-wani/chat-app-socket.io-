import React from "react";
import { User } from "lucide-react";
import formatTime from "../../utils/formatTime";

const MessageItem = ({ msg, username }) => {
  const isCurrentUser = msg.username === username;

  return (
    <div
      className={`max-w-xs mt-2 md:max-w-md ${
        isCurrentUser ? "ml-auto" : "mr-auto"
      }`}
    >
      <div
        className={`text-gray-400 font-semibold leading-snug pb-1 ${
          isCurrentUser ? "text-right mr-10" : "text-left ml-10"
        }`}
      >
        {isCurrentUser ? "You" : msg.username}
      </div>
      <div className={`flex gap-2 ${isCurrentUser ? "flex-row-reverse" : ""}`}>
        <div className="size-7 flex shrink-0 items-center justify-center rounded-full bg-gray-500/50">
          <User className="size-5" />
        </div>
        <div
          className={`px-3 py-2 rounded-2xl ${
            isCurrentUser
              ? "bg-gradient-to-br from-fuchsia-600 via-indigo-600 to-indigo-600 text-white rounded-tr-none"
              : "bg-black/80 rounded-tl-none"
          }`}
        >
          <h2 className="text-sm font-normal leading-snug">{msg.message}</h2>
        </div>
      </div>
      <p
        className={`mt-1 text-[10px] ${
          isCurrentUser ? "text-right mr-10" : "text-left ml-10"
        }`}
      >
        {formatTime(msg.time)}
      </p>
    </div>
  );
};

export default MessageItem;
