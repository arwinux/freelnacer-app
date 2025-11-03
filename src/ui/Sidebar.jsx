import { LuSparkles } from "react-icons/lu";
import { MdOutlineDashboard, MdOutlineLogout } from "react-icons/md";
import CustomNavlink from "./CustomNavlink";
import { FiBriefcase } from "react-icons/fi";
import { FaRegFolderOpen } from "react-icons/fa";
import { PiPlusCircleBold } from "react-icons/pi";
import { CgAwards } from "react-icons/cg";
import { RiAccountCircle2Line } from "react-icons/ri";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { useEffect } from "react";

function Sidebar({ isNavOpen, setIsNavOpen }) {
  useEffect(() => {
    const handleResize = () => {
      setIsNavOpen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsNavOpen]);

  return (
    <div
      className={` ${
        isNavOpen ? "absolute" : "hidden"
      } h-screen absolute w-full bg-black/20 backdrop-blur-sm lg:w-72  lg:relative row-start-1 row-span-2`}
    >
      <div
        className={`flex h-screen flex-col justify-between items-start overflow-y-auto bg-[#FAFAFA] shadow-xl shadow-zinc-300 p-6`}
      >
        <div className="flex gap-x-3 items-center w-full cursor-default">
          <div className="bg-radial text-white p-3 rounded-2xl [animation-duration:3s]">
            <LuSparkles className="size-6 animate-bounce [animation-duration:2s]" />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <p className="text-xl font-bold radial-text">FreelanceHub</p>
              <button
                onClick={() => setIsNavOpen(false)}
                className="text-white hover:shadow-lg shadow-zinc-600 rounded-full p-1"
              >
                <AiTwotoneCloseCircle className="size-5" />
              </button>
            </div>
            <p className="text-sm font-semibold text-zinc-500">
              Premium Edition
            </p>
          </div>
        </div>

        <div className="flex flex-1 justify-between mt-14 w-full flex-col">
          <ul className="flex flex-col gap-y-3">
            <li className="text-zinc-500/85 ml-1 text-[14px] font-bold">
              NAVIGATION
            </li>
            <li>
              <CustomNavlink to="/client/dashboard">
                <MdOutlineDashboard className="size-4" />
                <span>Dashboard</span>
              </CustomNavlink>
            </li>

            <li>
              <CustomNavlink to="/client/projects">
                <FiBriefcase className="size-4" />
                <span>All Projects</span>
              </CustomNavlink>
            </li>

            <li>
              <CustomNavlink to="/client/client-projects">
                <FaRegFolderOpen className="size-4" />
                <span>My Projects</span>
              </CustomNavlink>
            </li>

            <li>
              <CustomNavlink to="/client/create-project">
                <PiPlusCircleBold className="size-4" />
                <span>Create Project</span>
              </CustomNavlink>
            </li>

            <div className="flex gap-y-3 flex-col mt-10 w-full">
              <p className="text-zinc-500/85 ml-1 text-[14px] font-bold">
                YOUR ROLE
              </p>
              <div className="role-badge-container">
                <div className="role-badge">
                  <CgAwards />
                  <span>CLIENT</span>
                </div>
              </div>
            </div>
          </ul>

          <div className="flex flex-col gap-5 mt-5">
            <div className="flex gap-x-3 items-center">
              <div className="bg-black text-white p-2 rounded-full">
                <RiAccountCircle2Line className="size-7" />
              </div>
              <div className="flex flex-col">
                <p className="text-md font-bold">User Testic</p>
                <p className="text-sm font-semibold text-zinc-500">
                  example@gmail.com
                </p>
              </div>
            </div>
            <button className="flex text-md justify-center transition-all duration-300 hover:bg-orange-500/10 hover:border-orange-500 items-center gap-x-3 border-2 border-zinc-300/80 py-1 rounded-lg font-semibold">
              <MdOutlineLogout className="size-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
