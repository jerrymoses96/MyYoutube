import { RxHamburgerMenu } from "react-icons/rx";
import { IoMicCircleSharp } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { ToggleMenu } from "../Utils/AppSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../Constants";

const Header = () => {
  const [searchText, setsearchText] = useState("");
  const [searchSuggestion, setsearchSuggestion] = useState([]);
  const [showSuggestion, setshowSuggestion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestion();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();

    setsearchSuggestion(json[1]);
  };

  const dispatch = useDispatch();

  const HandleToggleMenu = () => {
    dispatch(ToggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 items-center shadow-md">
      <div className="flex col-span-2 gap-4">
        <div onClick={() => HandleToggleMenu()} className="cursor-pointer">
          <RxHamburgerMenu size={25} />
        </div>

        <img
          className="h-6"
          alt="Youtube-logo"
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
        />
      </div>
      <div className="flex col-span-8  items-center relative  ">
        <input
          type="text"
          placeholder="search"
          className="border border-gray-700 w-[550px] h-8 rounded-l-full ml-20 pl-4"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
          onFocus={() => setshowSuggestion(true)}
          onBlur={() => setshowSuggestion(false)}
        />

        <button className=" border border-gray-700 rounded-r-full w-8 h-8 flex items-center justify-center mr-2">
          <CiSearch />
        </button>
        <IoMicCircleSharp size={30} />
        <div className="absolute top-[32px] left-[90px] bg-zinc-50 w-[540px] py-2  rounded-xl shadow-2xl">
          <ul>
            {showSuggestion &&
              searchSuggestion.map((item) => {
                return (
                  <div className="flex items-center px-2">
                    <CiSearch />
                    <li
                      className="px-2 pb-1 rounded-xl  hover:bg-slate-200"
                      key={item}
                    >
                      {item}
                    </li>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>

      <div className="flex col-span-2 gap-2">
        <MdVideoCall size={25} />
        <IoIosNotifications size={25} />
        <FaUserCircle size={25} />
      </div>
    </div>
  );
};

export default Header;
