import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ Open }) => {
  return (
    <div
      className={`flex items-center rounded-md bg-slate-500 mt-6 px-4 py-2 ${
        !Open ? "px-2.5" : "px-4"
      }`}
    >
      <FaSearch
        className={`text-white text-lg block float-left cursor-pointer ${Open && "mr-2"}`}
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
