import { useState } from "react";
import { BsArrowLeftShort} from "react-icons/bs";
import { MdAlbum, MdHome, MdGeneratingTokens } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import logo from "./../assets/logo.jpeg";
import Search from "./Search";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [Open, setOpen] = useState(true);

  return (
    <div
      className={`bg-gray-700 p-5 pt-8 duration-300 ${
        Open ? "w-72" : "w-20"
      } relative hidden md:block`}
    >
      <BsArrowLeftShort
        className={`bg-white text-gray-700 text-3xl 
        rounded-full absolute -right-3 top-9 border-4
        border-gray-700 cursor-pointer duration-300 ${!Open && "rotate-180"}`}
        onClick={() => setOpen(!Open)}
      />
      <div className="inline-flex">
        <img
          src={logo}
          width={40}
          height={40}
          className={`rounded-full block float-left mr-2 duration-500 ${
            Open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-2xl ${
            !Open && "scale-0"
          } duration-300`}
        >
          BAZE
        </h1>
      </div>
      <Search Open={Open} />
      <nav className="w-full mt-10 flex flex-col gap-y-4 transition-all duration-300">
        <Link
          to="/"
          className="text-white flex items-center gap-x-2 p-2 text-xl"
        >
          <MdHome />
          {Open && "Home"}
        </Link>
        <Link
          to="/albums"
          className="text-white text-xl p-2 flex items-center gap-x-2"
        >
          <MdAlbum />
          {Open && "Albums"}
        </Link>
        <Link
         to="/GoPro"
         className="text-white text-xl p-2 flex items-center gap-x-2"
        >
          <MdGeneratingTokens />
          {Open && "Go Pro"}
        </Link>
        <Link
         to="/Signup"
         className="text-white text-xl flex p-2 items-center gap-x-2"
        >
          <IoMdLogOut />
          {Open && "Sign UP"}
        </Link> 
      </nav>
    </div>
  );
};

export default Sidebar;
