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
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-auto bg-primary-50/60">
        {/* Header */}
        <Header isNavOpen={isNavOpen} onNavOpen={onNavOpen} />

        {/* Content */}
        <main className="p-6 w-full lg:max-w-[1380px] lg:mx-auto bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
