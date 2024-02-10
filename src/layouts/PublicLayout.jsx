import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const PublicLayout = () => {
  return (
    <main className="flex items-center justify-between">
      <Sidebar />
      <section className="min-h-screen w-full overflow-x-hidden box-border">
        <Outlet />
      </section>
    </main>
  );
};

export default PublicLayout;
