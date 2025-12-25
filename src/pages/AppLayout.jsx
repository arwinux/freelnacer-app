import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../ui/Header';
import Sidebar from '../ui/Sidebar';

function AppLayout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

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
      <div
        ref={scrollRef}
        className="flex-1 flex flex-col overflow-auto bg-background"
      >
        {/* Header */}
        <Header isNavOpen={isNavOpen} onNavOpen={onNavOpen} />

        {/* Content */}
        <main className="pt-0 w-full lg:mx-auto bg-background">
          <Outlet key={location.pathname} />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
