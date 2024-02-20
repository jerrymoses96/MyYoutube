import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RemoveMenu } from "../Utils/AppSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RemoveMenu());
  }, []);

  return (
    <div className="m-5 shadow-xl">
      <iframe
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
