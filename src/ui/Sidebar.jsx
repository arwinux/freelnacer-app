import { LuSparkles } from 'react-icons/lu';
import { MdOutlineLogout } from 'react-icons/md';
import { RiAccountCircle2Line } from 'react-icons/ri';
import { AiTwotoneCloseCircle } from 'react-icons/ai';
import { useEffect } from 'react';

function Sidebar({ isNavOpen, setIsNavOpen, children }) {
  useEffect(() => {
    const handleResize = () => {
      setIsNavOpen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsNavOpen]);

  return (
    <div
      className={` ${
        isNavOpen ? 'absolute' : 'hidden'
      } h-screen absolute z-10 w-full bg-black/20 backdrop-blur-sm lg:w-72 lg:relative row-start-1 row-span-2`}
    >
      <div
        className={`flex w-72 h-screen flex-col justify-between items-start   bg-component shadow-xl p-6`}
      >
        <div className="flex gap-x-3 items-center w-full cursor-default">
          <div className="bg-radial-back text-color p-3 rounded-2xl [animation-duration:3s]">
            <LuSparkles className="size-6 animate-bounce [animation-duration:2s]" />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <p className="text-xl font-bold radial-text">FreelanceHub</p>
              <button
                onClick={() => setIsNavOpen(false)}
                className="text-color hover:shadow-lg shadow-zinc-600 rounded-full p-1"
              >
                <AiTwotoneCloseCircle className="size-5" />
              </button>
            </div>
            <p className="text-sm font-semibold text-subtitle">
              Premium Edition
            </p>
          </div>
        </div>

        <div className="flex flex-1 justify-between mt-14 w-full flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
