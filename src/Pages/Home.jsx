import React from "react";
import ImgSlider from "../Components/ImgSlider";
import { FaMusic } from "react-icons/fa";

const Home = () => {
  return (
    <div className="overflow-y-auto h-screen p-3 md:px-6 md:py-5">
      <div className="trending flex flex-col">
        <h1 className="text-2xl font-bold font-sans flex gap-x-3 items-center">
          <span>
            <FaMusic />
          </span>
          Trending Songs
        </h1>
        <ImgSlider />
      </div>
    </div>
  );
};

export default Home;
