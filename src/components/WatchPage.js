import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RemoveMenu } from "../Utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RemoveMenu());
  }, []);

  return (
    <div className="flex p-5 gap-3 w-full">
      <div className="shadow-xl">
        <iframe
          width="800"
          height="400"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="border border-black w-full bg-slate-100 overflow-y-scroll h-[400px]">
        <LiveChat />
        
      </div>
    </div>
  );
};

export default WatchPage;
