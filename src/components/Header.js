import { RxHamburgerMenu } from "react-icons/rx";
import { IoMicCircleSharp } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { ToggleMenu } from "../Utils/AppSlice";
import { Link } from "react-router-dom";

const Header = () => {
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
      <div className="flex col-span-8  items-center">
        <input
          type="text"
          placeholder="search"
          className="border border-gray-700 w-[550px] h-8 rounded-l-full ml-20 pl-4"
        />
        <button className=" border border-gray-700 rounded-r-full w-8 h-8 flex items-center justify-center mr-2">
          <CiSearch />
        </button>
        <IoMicCircleSharp size={30} />
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
