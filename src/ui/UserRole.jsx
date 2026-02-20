import useUser from '../features/authentication/useUser';
import { RiPoliceBadgeFill } from 'react-icons/ri';
function UserRole() {
  const { isLoading, user } = useUser();
  console.log(user)

  return (
    <div className="flex gap-y-3 flex-col mt-10 w-full">
      <p className="text-subtitle/85 ml-1 text-[14px] font-bold">YOUR ROLE</p>
      <div className="role-badge-container bg-radial-back w-11/12 mx-auto">
        <div
          className={`flex justify-center items-center gap-x-2 text-lg role-badge ${
            isLoading ? 'blur-sm opacity-50' : ''
          }`}
        >
          <RiPoliceBadgeFill className="text-component" />
          <span>{user?.role === 'OWNER' ? 'CLIENT' : user?.role}</span>
        </div>
      </div>
    </div>
  );
}

export default UserRole;
