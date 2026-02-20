import React from 'react';
import AppLayout from '../../pages/AppLayout';
import CustomNavlink from '../../ui/CustomNavlink';
import { PiPlusCircleBold } from 'react-icons/pi';
import { MdOutlineCategory, MdOutlineDashboard } from 'react-icons/md';
import { FiBriefcase } from 'react-icons/fi';
import { FaRegFolderOpen } from 'react-icons/fa';
import UserRole from '../../ui/UserRole';
import { LuUsers } from 'react-icons/lu';

function AdminLayout() {
  return (
    <div>
      <AppLayout>
        <CustomNavlink to='/admin/dashboard'>
          <MdOutlineDashboard className='size-[18px]' />
          <span>Dashboard</span>
        </CustomNavlink>

        <CustomNavlink to='/admin/projects'>
          <FiBriefcase className='size-[18px]' />
          <span>All Projects</span>
        </CustomNavlink>

        <CustomNavlink to='/admin/admin-projects'>
          <FaRegFolderOpen className='size-[18px]' />
          <span>My Projects</span>
        </CustomNavlink>

        <CustomNavlink to='/admin/create-project'>
          <PiPlusCircleBold className='size-[18px]' />
          <span>Create Project</span>
        </CustomNavlink>

        <CustomNavlink to='/admin/manage-categories'>
          <MdOutlineCategory className='size-[18px]' />
          <span>Manage Categories</span>
        </CustomNavlink>

        <CustomNavlink to='/admin/manage-users'>
          <LuUsers  className='size-[18px]' />
          <span>Manage Users</span>
        </CustomNavlink>

        <UserRole />
      </AppLayout>
    </div>
  );
}

export default AdminLayout;
