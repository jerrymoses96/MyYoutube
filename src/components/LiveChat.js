import React, { useEffect, useState } from "react";
import ChatLive from "./ChatLive";
import { useDispatch, useSelector } from "react-redux";
import { AddMessage } from "../Utils/ChatSlice";
import { GenerateRandomMessage, GenerateRandomName } from "../Utils/helper";

const LiveChat = () => {
  const [inputtext, setinputtext] = useState("");
  const dispatch = useDispatch();
  const ChatMessage = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        AddMessage({
          name: GenerateRandomName(),
          message: GenerateRandomMessage(30),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="w-full flex flex-col ">
        {ChatMessage.map((c, i) => {
          return <ChatLive key={i} name={c.name} message={c.message} />;
        })}
      </div>
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            AddMessage({
              name: "Jerin ouseph",
              message: inputtext,
            })
          );
          setinputtext("");
        }}
      >
        <input
          type="text"
          value={inputtext}
          onChange={(e) => setinputtext(e.target.value)}
          className="border border-black w-4/5 "
        />
        <button className="w-1/5 bg-gray-400 rounded-sm font-mono">send</button>
      </form>
    </div>
  );
};

export default LiveChat;
