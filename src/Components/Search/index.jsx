import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ Open }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-md bg-slate-500 mt-6 ${
        !Open ? "px-0 py-1" : "px-4 py-2"
      }`}
    >
      <FaSearch
        size={25}
        className={`text-white block float-left cursor-pointer ${
          Open && "mr-2"
        }`}
      />
      <input
        type={"search"}
        placeholder="search song"
        className={`text-base bg-transparent w-full text-white focus:outline-none ml-2 ${
          !Open && "hidden"
        }`}
      />
    </div>
  );
};

export default Search;
