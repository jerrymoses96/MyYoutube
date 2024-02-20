import React from "react";
import Button from "./Button";

const youtubeSuggestions = [
  "Science",
  "Recipes",
  "Adventure",
  "Wellness",
  "Entertainment",
  "Crafts",
  "Learning",
  "Documentaries",
  "Reviews",
];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap max-w-full overflow-x-hidden ">
      {youtubeSuggestions.map((item, index) => {
        return <Button key={index} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
