import React from 'react';
import LoadingPage from '../../ui/LoadingPage';
import useAllUsers from '../authentication/useAllUsers';
import UserRow from './UserRow';

function UserTable() {
  const { users, isLoading } = useAllUsers();

  return (
    <div>
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
            <UserRow key={user._id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UserTable;
