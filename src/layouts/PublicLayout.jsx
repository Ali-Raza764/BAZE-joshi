import React from "react";
import { Outlet } from "react-router-dom";
import MusicPlayer from "../Components/MusicPlayer";
import Sidebar from "../Components/Sidebar";
import BottomBar from "../Components/BottomBar";

const PublicLayout = () => {
  return (
    <main className="h-full md:h-screen grid grid-cols-1 grid-rows-[auto,1fr]">
      <section className="w-full overflow-y-auto">
        <div className="flex h-full w-full">
          <Sidebar />
          <div className="h-full w-full overflow-auto">
            <div className="h-full pb-[4rem] md:p-0">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center fixed md:static bottom-0 w-screen md:w-full">
        <MusicPlayer />
        <BottomBar />
      </div>
    </main>
  );
};

export default PublicLayout;
