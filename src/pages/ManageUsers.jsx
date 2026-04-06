import { FaCheckCircle, FaRegCheckCircle, FaRegClock } from 'react-icons/fa';
import primiumBadge from '../utils/primiumBadge';
import LoadingPage from '../ui/LoadingPage';
import useAllUsers from '../features/authentication/useAllUsers';
import toDateShort from '../utils/toDateShort';
import { IoCloseCircle } from 'react-icons/io5';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { TiPencil } from 'react-icons/ti';
import ConfirmDelete from '../ui/ConfirmDelete';
import Modal from '../ui/Modal';
import { useState } from 'react';

function ManageUsers() {
  const { users, isLoading } = useAllUsers();

  return (
    <div className='page-set'>
      {/* Header */}
      <div className='mb-8'>
        <h1 className='text-title font-bold text-3xl tracking-tight'>
          Manage Users
        </h1>
        <p className='text-subtitle opacity-80 mt-1'>
          Verify, update, and manage platform users
        </p>
      </div>

      {/* Table Container */}
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className=' backdrop-blur-lg shadow-xl rounded-xl overflow-hidden overflow-y-auto'>
          {/* Table Header */}
          <div
            className='
          hidden md:grid grid-cols-6  gap-y-4
          text-gray-700 text-sm font-semibold px-6 py-4 
          bg-component
          sticky top-0
        '
          >
            <div>User</div>
            <div>Email</div>
            <div>Role</div>
            <div>Status</div>
            <div>Joined</div>
            <div>Actions</div>
          </div>

          {/* Table Rows */}
          {users.map((user, i) => (
            <Row key={i} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

function Row({ user }) {
  const [isStatusUpdating, setIsStatusUpdating] = useState(false);

  const statusOptions = [
    {
      label: 'DECLINE',
      value: 0,
      classname: 'bg-red-200! text-red-700!',
      icon: <IoMdCloseCircleOutline className='size-4' />,
    },

    {
      label: 'PENDING',
      value: 1,
      classname: 'bg-yellow-200! text-yellow-700!',
      icon: <FaRegClock className='size-4' />,
    },

    {
      label: 'ACCEPT',
      value: 2,
      classname: 'bg-green-200! text-green-700!',
      icon: <FaRegCheckCircle className='size-4' />,
    },
  ];

  const roleColor = {
    FREELANCER: 'bg-linear-to-r from-blue-600 bg to-blue-500',
    OWNER: 'bg-linear-to-r from-green-600 bg to-emerald-400',
    ADMIN: 'bg-linear-to-r from-primary-600 bg to-yellow-400',
  };

  return (
    <div
      className='
      grid grid-cols-1 md:grid-cols-6 
      px-6 py-8 md:py-4 
      shadow-2xl shadow-black 
      md:shadow-none
      items-center gap-6 
      hover:translate-x-1
      bg-component transition-all duration-200
    '
    >
      <div className='flex items-center gap-3'>
        <div className='bg-radial-back rounded-xl flex justify-center items-center size-14 text-color font-bold text-2xl'>
          {`${user.name[0].toUpperCase()}${user.name[1].toUpperCase()}`}
        </div>
        <div>
          <p className='font-semibold text-gray-900'>{user.name}</p>
          <p className='md:hidden text-xs text-gray-800 mt-0.5'>{user.role}</p>
        </div>
      </div>

      <div className='text-gray-700'>
        <p className='font-medium'>{user.email}</p>
        <p className='md:hidden text-xs text-gray-600 mt-1 overflow-x-auto'>
          {user.emial}
        </p>
      </div>

      <div>
        <span
          className={`
            badge-profile-detail border-none! text-color! ${roleColor[user.role]}
            px-3 py-1 text-xs font-semibold rounded-md
          `}
        >
          {user.role}
        </span>
        <p className='md:hidden text-xs text-gray-600 mt-1'>Role</p>
      </div>

      <div>
        <span
          className={`
            badge-profile-detail border-none! ${statusOptions[user.status].classname}
            px-3! py-1.5! shadow! shadow-black/20 text-xs font-semibold rounded-md inline-flex items-center gap-2
            
          `}
        >
          {statusOptions[user.status].icon}
          {statusOptions[user.status].label}
        </span>
        <p className='md:hidden text-xs text-gray-600 mt-1'>Status</p>
      </div>

      <div className='text-gray-700 font-medium'>
        {toDateShort(user.createdAt)}
        <p className='md:hidden text-xs text-gray-600 mt-1'>Joined</p>
      </div>

      <div className='flex md:justify-start'>
        <button
          onClick={() => setIsStatusUpdating(true)}
          className='bg-title text-color px-3 py-1 rounded-sm text-sm font-medium'
          type='button'
        >
          Verify
        </button>

        <Modal
          open={isStatusUpdating}
          onClose={() => setIsStatusUpdating(false)}
          title={
            <div className='flex items-center gap-x-2'>
              <div className='flex items-center gap-x-2'>
                <div className='size-6 flex justify-center bg-title rounded-lg items-center'>
                  <TiPencil className='text-component size-4' />
                </div>
                Update
              </div>
              <p className='text-md font-bold truncate text-red-600'>
                {`${user.name}'s`}
              </p>
              <p className='text-md truncate'>Status</p>
            </div>
          }
        ></Modal>
      </div>
    </div>
  );
}

export default ManageUsers;
