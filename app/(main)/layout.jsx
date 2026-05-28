import React from "react";
import Sidebar from "@/components/sidebar";

const MainLayout = async ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto pt-20 sm:pt-24 pb-16 sm:pb-20 px-3 sm:px-6 md:px-8">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
