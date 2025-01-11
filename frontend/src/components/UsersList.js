import React from "react";
import { User } from "lucide-react";

const UsersList = ({ users }) => {
  return (
    <div className="flex gap-4 overflow-x-scroll">
      {users.map((user, idx) => (
        <div
          key={idx}
          className="flex justify-center items-center gap-2 text-sm mb-2 pl-1 pr-5 py-1 bg-slate-600/50 rounded-full"
        >
          <div className="relative flex size-10 rounded-full bg-indigo-600 items-center justify-center">
            <div className="absolute bottom-0 right-1 size-2 rounded-full bg-green-600 animate-ping"></div>
            <User className="size-7 text-white" />
          </div>
          <div>
            <p className="uppercase font-medium">{user.username}</p>
            <p
              className={`text-xs font-medium ${
                user.online ? "text-green-600" : "text-red-600"
              }`}
            >
              {user.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
