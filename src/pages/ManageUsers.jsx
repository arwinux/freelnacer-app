import { FaRegClock, FaRegCheckCircle } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { TiPencil } from 'react-icons/ti';
import LoadingPage from '../ui/LoadingPage';
import useAllUsers from '../features/authentication/useAllUsers';
import toDateShort from '../utils/toDateShort';
import Modal from '../ui/Modal';
import { useState } from 'react';

function ManageUsers() {
  const { users, isLoading } = useAllUsers();

  return (
    <div className='page-set'>
      <div className='mb-8'>
        <h1 className='text-title font-bold text-3xl tracking-tight'>
          Manage Users
        </h1>
        <p className='text-subtitle opacity-80 mt-1'>
          Verify, update, and manage platform users
        </p>
      </div>

      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className='bg-component rounded-xl shadow-lg overflow-hidden'>
          {/* Table header - only visible on md+ */}
          <div className='hidden md:grid grid-cols-6 gap-4 px-6 py-4 text-sm font-semibold text-gray-700 bg-component sticky top-0 z-10'>
            <div>User</div>
            <div>Email</div>
            <div>Role</div>
            <div>Status</div>
            <div>Joined</div>
            <div>Actions</div>
          </div>

          {users.map((user) => (
            <Row key={user._id} user={user} />
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
      className: 'bg-red-200 text-red-700',
      icon: <IoMdCloseCircleOutline className='size-4' />,
    },
    {
      label: 'PENDING',
      value: 1,
      className: 'bg-yellow-200 text-yellow-700',
      icon: <FaRegClock className='size-4' />,
    },
    {
      label: 'ACCEPT',
      value: 2,
      className: 'bg-green-200 text-green-700',
      icon: <FaRegCheckCircle className='size-4' />,
    },
  ];

  const roleColor = {
    FREELANCER: 'from-blue-600 to-blue-400',
    OWNER: 'from-green-600 to-emerald-400',
    ADMIN: 'from-primary-600 to-yellow-400',
  };

  return (
    <div
      className='
        border-b border-gray-200
        px-4 py-6 md:px-6 md:py-4
        grid grid-cols-1 md:grid-cols-6
        shadow-2xs shadow-black/25 md:shadow-none
        hover:translate-x-1
        items-center
        gap-6 md:gap-4
        hover:bg-component/80 transition-all duration-150
      '
    >
      {/* USER */}
      <div className='flex items-center gap-3'>
        <div className='bg-radial-back rounded-xl flex justify-center items-center size-12 p-5 text-color font-bold text-xl'>
          {user.name?.slice(0, 2).toUpperCase()}
        </div>

        <div className='flex flex-col'>
          <p className='font-semibold text-gray-900'>{user.name}</p>
          <p className='text-xs text-gray-600 md:hidden'>{user.role}</p>
        </div>
      </div>

      {/* EMAIL */}
      <div className='relative group flex flex-col md:block'>
        <p className='font-medium text-subtitle truncate max-w-[200px]'>
          {user.email}
        </p>

        {/* tooltip */}
        <span
          className='
            absolute left-0 top-full mt-1
            hidden group-hover:block
            bg-black text-white text-xs px-2 py-1 rounded
            whitespace-nowrap shadow-lg z-50
        '
        >
          {user.email}
        </span>

        <p className='text-xs text-gray-600 mt-1 md:hidden'>Email</p>
      </div>

      {/* ROLE */}
      <div className='flex w-28 flex-col'>
        <span
          className={`
            text-color flex justify-center items-center text-xs font-semibold px-3 py-1.5 rounded-md
            bg-linear-to-r ${roleColor[user.role]}
          `}
        >
          {user.role}
        </span>
        <p className='text-xs text-gray-600 mt-1 md:hidden'>Role</p>
      </div>

      {/* STATUS */}
      <div className='flex w-28 flex-col'>
        <span
          className={`
            flex justify-center items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium
            ${statusOptions[user.status].className}
          `}
        >
          {statusOptions[user.status].icon}
          {statusOptions[user.status].label}
        </span>
        <p className='text-xs text-gray-600 mt-1 md:hidden'>Status</p>
      </div>

      {/* JOINED DATE */}
      <div className='flex flex-col font-medium text-gray-700'>
        {toDateShort(user.createdAt)}
        <p className='text-xs text-gray-600 mt-1 md:hidden'>Joined</p>
      </div>

      {/* ACTION */}
      <div className='flex items-start md:items-center'>
        <button
          onClick={() => setIsStatusUpdating(true)}
          className='bg-title text-color px-4 py-2 rounded-md text-sm font-medium hover:bg-title/90 transition'
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
        />
      </div>
    </div>
  );
}

export default ManageUsers;
