import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";

function AppLayout() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const onNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header isNavOpen={isNavOpen} onNavOpen={onNavOpen} />

        {/* Content */}
        <main className="flex-1 p-6 overflow-hidden w-full max-w-7xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
