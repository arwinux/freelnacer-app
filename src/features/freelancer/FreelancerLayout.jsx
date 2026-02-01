import AppLayout from '../../pages/AppLayout';
import CustomNavlink from '../../ui/CustomNavlink';
import { MdOutlineDashboard } from 'react-icons/md';
import { FiBriefcase } from 'react-icons/fi';
import { FaRegFolderOpen } from 'react-icons/fa';
import UserRole from '../../ui/UserRole';
import { PiPlusCircleBold } from 'react-icons/pi';

function FreelancerLayout() {
  return (
    <div>
      <AppLayout>
        <CustomNavlink to='/freelancer/dashboard'>
          <MdOutlineDashboard className='size-[18px]' />
          <span>Dashboard</span>
        </CustomNavlink>

        <CustomNavlink to='/freelancer/projects'>
          <FiBriefcase className='size-[18px]' />
          <span>Browse Projects</span>
        </CustomNavlink>

        <CustomNavlink to='/freelancer/proposals'>
          <FaRegFolderOpen className='size-[18px]' />
          <span>My Proposals</span>
        </CustomNavlink>

        <CustomNavlink to='/freelancer/create-proposal'>
          <PiPlusCircleBold className='size-[18px]' />
          <span>Create Project</span>
        </CustomNavlink>

        <UserRole />
      </AppLayout>
    </div>
  );
}

export default FreelancerLayout;
