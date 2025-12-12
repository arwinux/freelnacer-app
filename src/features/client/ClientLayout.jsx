import AppLayout from '../../pages/AppLayout';
import CustomNavlink from '../../ui/CustomNavlink';
import { MdOutlineDashboard, MdOutlineLogout } from 'react-icons/md';
import { FiBriefcase } from 'react-icons/fi';
import { FaRegFolderOpen } from 'react-icons/fa';
import { PiPlusCircleBold } from 'react-icons/pi';
import { CgAwards } from 'react-icons/cg';
import { RiAccountCircle2Line } from 'react-icons/ri';
import UserAvatar from '../../ui/UserAvatar';
import UserRole from '../../ui/UserRole';

function ClientLayout() {
  return (
    <div>
      <AppLayout>
        <ul className="flex flex-col gap-y-2">
          <li className="text-subtitle/85 ml-1 mb-4 text-[14px] font-bold">
            NAVIGATION
          </li>
          <li>
            <CustomNavlink to="/client/dashboard">
              <MdOutlineDashboard className="size-[18px]" />
              <span>Dashboard</span>
            </CustomNavlink>
          </li>

          <li>
            <CustomNavlink to="/client/projects">
              <FiBriefcase className="size-[18px]" />
              <span>All Projects</span>
            </CustomNavlink>
          </li>

          <li>
            <CustomNavlink to="/client/client-projects">
              <FaRegFolderOpen className="size-[18px]" />
              <span>My Projects</span>
            </CustomNavlink>
          </li>

          <li>
            <CustomNavlink to="/client/create-project">
              <PiPlusCircleBold className="size-[18px]" />
              <span>Create Project</span>
            </CustomNavlink>
          </li>

          <UserRole/>
        </ul>

        <div className="flex flex-col gap-5 mt-5">
          <UserAvatar />
          <button className="flex text-md justify-center transition-all duration-300 hover:bg-primary-500/10 hover:border-primary-500 items-center gap-x-3 border-2 border-zinc-300/80 py-1 rounded-lg font-semibold">
            <MdOutlineLogout className="size-5" />
            <span>Logout</span>
          </button>
        </div>
      </AppLayout>
    </div>
  );
}

export default ClientLayout;
