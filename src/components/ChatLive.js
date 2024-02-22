import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatLive = ({name,message}) => {
  return (
    <div className="flex p-2">
      <FaUserCircle size={25} />
      <p className="font-bold font-mono ml-3 mr-2">{name}</p>
      <p className="font-mono">{message} </p>
    </div>
  );
};

export default ChatLive;
