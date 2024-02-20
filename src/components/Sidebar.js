import React from "react";
import { useSelector } from "react-redux";
import Store from "../Utils/Store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const IsMenuOpen = useSelector((Store) => Store.app.IsMenuOpen);

  if (!IsMenuOpen) return null;

  return (
    <div className="w-52 p-7 shadow-md">
      <ul>
        <li> <Link to="/" >Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <ul>
        <li>Your channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Show More</li>
      </ul>
    </div>
  );
};

export default Sidebar;
