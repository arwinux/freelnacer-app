import AppLayout from '../../pages/AppLayout';
import CustomNavlink from '../../ui/CustomNavlink';
import { MdOutlineDashboard, MdOutlineLogout } from 'react-icons/md';
import { FiBriefcase } from 'react-icons/fi';
import { FaRegFolderOpen } from 'react-icons/fa';
import { PiPlusCircleBold } from 'react-icons/pi';
import { CgAwards } from 'react-icons/cg';
import { RiAccountCircle2Line } from 'react-icons/ri';
import UserRole from '../../ui/UserRole';
import { LogoutSideBarBtn } from '../../ui/LogoutBtn';

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

          <UserRole />
        </ul>

        <LogoutSideBarBtn />
      </AppLayout>
    </div>
  );
}

export default ClientLayout;
