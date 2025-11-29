import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../ui/Header';
import Sidebar from '../ui/Sidebar';

function AppLayout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const onNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}>
        {children}
      </Sidebar>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-auto bg-background">
        {/* Header */}
        <Header isNavOpen={isNavOpen} onNavOpen={onNavOpen} />

        {/* Content */}
        <main className="pt-0 w-full lg:mx-auto bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
