import React from "react";

const LoginModal = ({ username, setUsername, handleSetUsername }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-black/50 p-6 rounded-xl shadow-lg w-11/12 md:w-1/3">
        <h2 className="text-lg font-bold mb-4 text-center">Login</h2>
        <p className="my-1">Enter your username</p>
        <form onSubmit={handleSetUsername}>
          <input
            type="text"
            className="w-full bg-gray-600/50 p-2 mb-4 rounded-lg focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            onClick={handleSetUsername}
            className="w-full bg-gradient-to-tl from-indigo-600 to-fuchsia-600 text-white px-4 py-2 rounded"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
