import AppLayout from '../../pages/AppLayout';
import CustomNavlink from '../../ui/CustomNavlink';
import { MdOutlineDashboard } from 'react-icons/md';
import { FiBriefcase } from 'react-icons/fi';
import { FaRegFolderOpen } from 'react-icons/fa';
import { PiPlusCircleBold } from 'react-icons/pi';
import UserRole from '../../ui/UserRole';

function ClientLayout() {
  return (
    <div>
      <AppLayout>
        <CustomNavlink to="/client/dashboard">
          <MdOutlineDashboard className="size-[18px]" />
          <span>Dashboard</span>
        </CustomNavlink>

        <CustomNavlink to="/client/projects">
          <FiBriefcase className="size-[18px]" />
          <span>All Projects</span>
        </CustomNavlink>

        <CustomNavlink to="/client/client-projects">
          <FaRegFolderOpen className="size-[18px]" />
          <span>My Projects</span>
        </CustomNavlink>

        <CustomNavlink to="/client/create-project">
          <PiPlusCircleBold className="size-[18px]" />
          <span>Create Project</span>
        </CustomNavlink>

        <UserRole />
      </AppLayout>
    </div>
  );
}

export default ClientLayout;
