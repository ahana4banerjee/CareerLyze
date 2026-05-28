import React from "react";
import Sidebar from "@/components/sidebar";
import { ErrorBoundary } from "@/components/error-boundary";

const MainLayout = async ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto pt-24 pb-20 px-4 md:px-8">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default MainLayout;
