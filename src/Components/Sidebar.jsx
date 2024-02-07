import React, { useState } from "react";
import Home from "../Pages/Home"
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import logo from "../assets/logo.jpeg"

const Sidebar = () => {
  const [Open, setOpen] = useState(false);

  return (
    <div className={`bg-blue-500 h-screen p-5 pt-8 duration-300 ${Open ? "w-72" : "w-20"} relative`}>
      <BsArrowLeftShort
        className={`bg-white text-blue-500 text-3xl 
        rounded-full absolute -right-3 top-9 border
        border-blue-500 cursor-pointer duration-300 ${!Open && "rotate-180"}`}
        onClick={() => setOpen(!Open)}
      />
      <div className="inline-flex">
        <img 
         src={logo} 
         width={40} 
         height={40} 
         className={`rounded-full block float-left mr-2 duration-500 ${Open && "rotate-[360deg]"}`}
        />
        <h1 className={`text-white origin-left font-medium text-2xl ${!Open && "scale-0"} duration-300`}>BAZE</h1>
      </div>
      <div className={`flex items-center rounded-md bg-slate-500 mt-6 px-4 py-2 ${!Open ? "px-2.5" : "px-4"}`}>
        <BsSearch className={`text-white text-lg block float-left cursor-pointer`}/>
        <input 
         type={"search"} 
         placeholder="search song" 
         className={`text-base bg-transparent w-full text-white focus:outline-none ml-2 ${!Open && "hidden"}`}
        />
      </div>
      <ul>
      </ul>
    </div>
  );
};

export default Sidebar;
