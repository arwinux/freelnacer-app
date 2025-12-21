import { MdOutlineLogout } from 'react-icons/md';
import useLogout from '../features/authentication/useLogout';
import { UserAvatarSideBar } from './UserAvatar';
import Loading from './Loading';

export function LogoutSideBarBtn() {
  const { isPending, logout } = useLogout();

  return (
    <div className="flex flex-col gap-5 mt-5">
      <UserAvatarSideBar />

      <button
        onClick={logout}
        disabled={isPending}
        className="
          bg-category/20
          text-title
          flex items-center justify-center gap-x-3
          border-2 border-title-300/80 rounded-lg
          px-3 py-2 font-semibold text-sm
          transition-all duration-300
          hover:bg-primary-500/10 hover:border-primary-500
          disabled:opacity-60 disabled:cursor-not-allowed
        "
      >
        {isPending ? (
          <>
            <span>Signing you out…</span>
            <Loading color="black" width="18" height="18" />
          </>
        ) : (
          <>
            <MdOutlineLogout className="size-5" />
            <span>Sign out</span>
          </>
        )}
      </button>
    </div>
  );
}

export function LogoutHeaderBtn({ className }) {
  const { isPending, logout } = useLogout();

  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <button
        onClick={logout}
        disabled={isPending}
        className="
          flex items-center justify-center gap-x-3
          border-2 border-zinc-300/80 rounded-lg
          px-3 py-2 font-semibold text-sm
          transition-all duration-300
          hover:bg-primary-500/10 hover:border-primary-500
          disabled:opacity-60 disabled:cursor-not-allowed
        "
      >
        {isPending ? (
          <Loading color="black" width="18" height="18" />
        ) : (
          <MdOutlineLogout className="size-5" />
        )}
      </button>
    </div>
  );
}
