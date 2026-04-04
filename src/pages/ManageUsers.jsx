import { FaRegClock } from 'react-icons/fa';
import primiumBadge from '../utils/primiumBadge';

function ManageUsers() {
  const users = [
    {
      name: 'Arvin Jafari',
      initials: 'AR',
      email: 'arwinux@gmail.com',
      role: 'ADMIN',
      status: 'Pending',
      statusColor: 'yellow',
      joined: '2025/10/25',
    },
  ];

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
    </div>
  );
}

function Row({ user }) {
  return (
    <div
      className='
      grid grid-cols-1 md:grid-cols-6 
      px-6 py-4 
      items-center gap-6
      hover:translate-x-1
      bg-component transition-all duration-200
    '
    >
      <div className='flex items-center gap-3'>
        <div className='bg-radial-back rounded-xl text-color font-bold text-2xl p-2'>
          {user.initials}
        </div>
        <div>
          <p className='font-semibold text-gray-900'>{user.name}</p>
          <p className='md:hidden text-xs text-gray-400 mt-0.5'>User</p>
        </div>
      </div>

      <div className='text-gray-700'>
        <p className='font-medium'>{user.email}</p>
        <p className='md:hidden text-xs text-gray-400 mt-1 overflow-x-auto'>
          Email
        </p>
      </div>

      <div>
        <span
          className={`
            badge-profile-detail ${primiumBadge('primary')}
            px-3 py-1 text-xs font-semibold rounded-md
          `}
        >
          {user.role}
        </span>
        <p className='md:hidden text-xs text-gray-400 mt-1'>Role</p>
      </div>

      <div>
        <span
          className={`
            badge-profile-detail ${primiumBadge(user.statusColor)}
            px-3 py-1 text-xs font-semibold rounded-md inline-flex items-center gap-2
            
          `}
        >
          <FaRegClock className='size-4' />
          {user.status}
        </span>
        <p className='md:hidden text-xs text-gray-400 mt-1'>Status</p>
      </div>

      <div className='text-gray-700 font-medium'>
        {user.joined}
        <p className='md:hidden text-xs text-gray-400 mt-1'>Joined</p>
      </div>

      <div className='flex md:justify-start'>
        <button
          className='bg-title text-color px-3 py-1 rounded-sm text-sm font-medium'
          type='button'
        >
          Verify
        </button>
      </div>
    </div>
  );
}

export default ManageUsers;
