import React from "react";
import { useSelector } from "react-redux";
import Store from "../Utils/Store";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { MdHistory } from "react-icons/md";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  const IsMenuOpen = useSelector((Store) => Store.app.IsMenuOpen);

  if (!IsMenuOpen) return null;

  return (
    <div className="w-52 p-7 shadow-md">
      <ul className="border-b-2 py-2 font-semibold flex flex-col gap-2 mb-5">
        <div className="flex items-center gap-2">
          <GoHome />
          <li className="">
            <Link to="/">Home</Link>
          </li>
        </div>
        <div className="flex items-center gap-2">
          <SiYoutubeshorts />
          <li>Shorts</li>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <MdOutlineSubscriptions />

          <li>Subscriptions</li>
        </div>
      </ul>
      <ul className="font-semibold flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <GrChannel />
          <li>Your channel</li>
        </div>
        <div className="flex items-center gap-2">
          <MdHistory />
          <li>History</li>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineVideoSettings />
          <li>Your Videos</li>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineWatchLater />
          <li>Watch Later</li>
        </div>
        <div className="flex items-center gap-2">
          <IoIosArrowDown />
          <li>Show More</li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
