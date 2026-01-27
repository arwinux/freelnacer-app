import { RiAccountCircle2Line } from 'react-icons/ri';
import useUser from '../features/authentication/useUser';
import Loading from './Loading';

export function UserAvatarSideBar() {
  const { isLoading, user } = useUser();
  return (
    <div className="flex gap-x-3 items-center">
      <div className="bg-title text-color size-10 flex justify-center items-center rounded-full">
        <RiAccountCircle2Line className="size-7" />
      </div>
      <div
        className={`flex flex-col cursor-default ${
          isLoading ? 'blur-sm opacity-80' : ''
        }`}
      >
        <p className="text-md text-title font-bold">{user?.name}</p>
        <div className="relative group">
          <p className="text-sm/relaxed font-semibold text-subtitle max-w-40 truncate">
            {user?.email}
          </p>

          <span
            className="
            absolute left-0 top-full mt-1
            hidden group-hover:block
            bg-black text-white text-xs px-2 py-1 rounded
            whitespace-nowrap
            shadow-lg z-50
            "
          >
            {user?.email}
          </span>
        </div>
      </div>
    </div>
  );
}

export function UserAvatarHeader({ className }) {
  const { isLoading, user } = useUser();
  return (
    <div className={`flex gap-x-3 items-center ${className}`}>
      <button className="bg-title text-sm p-4 border-3 border-dotted border-primary-500 text-color size-5 flex justify-center items-center rounded-full">
        {isLoading ? (
          <Loading />
        ) : (
          `${user?.name[0].toUpperCase()}${user?.name[1].toUpperCase()}`
        )}
      </button>
    </div>
  );
}
