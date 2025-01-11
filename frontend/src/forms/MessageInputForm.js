import React from "react";
import { Send, Smile } from "lucide-react";

const MessageInputForm = ({
  message,
  setMessage,
  sendMessage,
  handleTyping,
}) => {
  return (
    <form
      onSubmit={sendMessage}
      className="input-box px-5 absolute bottom-5 w-full md:w-1/2 flex mt-4 gap-1"
    >
      <input
        type="text"
        className="flex-grow p-2 pl-5 bg-gray-600/50 rounded-full focus:outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleTyping}
        placeholder="type message here..."
      />
      <button className="bg-gradient-to-tr from-indigo-600 to-fuchsia-600 text-white p-2 rounded-full">
        <Smile />
      </button>
      <button
        type="submit"
        className="bg-gradient-to-tr from-indigo-600 to-fuchsia-600 text-white p-2 rounded-full"
      >
        <Send />
      </button>
    </form>
  );
};

export default MessageInputForm;
