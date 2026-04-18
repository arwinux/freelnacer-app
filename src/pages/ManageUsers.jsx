import UserTable from '../features/users/UserTable';

function ManageUsers() {
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

      <UserTable />
    </div>
  );
}

export default ManageUsers;
