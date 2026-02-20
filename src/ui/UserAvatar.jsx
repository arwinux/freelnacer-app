import { RiAccountCircle2Line } from 'react-icons/ri';
import useUser from '../features/authentication/useUser';
import Loading from './Loading';
import { NavLink } from 'react-router-dom';

export function UserAvatarSideBar() {
  const { isLoading, user } = useUser();
  return (
    <NavLink to='profile'>
      <div className='cursor-pointer hover:bg-title/15 p-3 rounded-xl flex gap-x-3 items-center'>
        <div className='bg-title text-color size-10 flex justify-center items-center rounded-full'>
          <RiAccountCircle2Line className='size-7' />
        </div>
        <div
          className={`flex flex-col ${isLoading ? 'blur-sm opacity-80' : ''}`}
        >
          <p className='text-md text-title font-bold'>{user?.name}</p>
          <div className='relative group'>
            <p className='text-sm/relaxed font-semibold text-subtitle max-w-40 truncate'>
              {user?.email}
            </p>

            <span
              className='
            absolute left-0 top-full mt-1
            hidden group-hover:block
            bg-black text-white text-xs px-2 py-1 rounded
            whitespace-nowrap
            shadow-lg z-50
            '
            >
              {user?.email}
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export function UserAvatarHeader({ className }) {
  const { isLoading, user } = useUser();
  return (
    <NavLink to='profile'>
      <div className={`flex gap-x-3 items-center cursor-pointer ${className}`}>
        <div className='bg-color hover:bg-title/15 text-sm p-4 border-3 border-dotted border-primary-500 text-title size-5 flex justify-center items-center rounded-full'>
          {isLoading ? (
            <Loading />
          ) : (
            `${user?.name[0].toUpperCase()}${user?.name[1].toUpperCase()}`
          )}
        </div>
      </div>
    </NavLink>
  );
}
