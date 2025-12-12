import React from 'react';
import { RiAccountCircle2Line } from 'react-icons/ri';
import useUser from '../features/authentication/useUser';

function UserAvatar() {
  const { isLoading, user } = useUser();
  return (
    <div className="flex gap-x-3 items-center">
      <div className="bg-black text-color size-10 flex justify-center items-center rounded-full">
        <RiAccountCircle2Line className="size-7" />
      </div>
      <div
        className={`flex flex-col cursor-default ${
          isLoading ? 'blur-sm opacity-80' : ''
        }`}
      >
        <p className="text-md font-bold">{user?.name}</p>
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

export default UserAvatar;
