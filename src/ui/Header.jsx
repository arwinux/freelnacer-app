import { MdArrowBackIosNew } from 'react-icons/md';
import { LogoutHeaderBtn } from './LogoutBtn';
import ToggleTheme from './ToggleTheme';
import { UserAvatarHeader } from './UserAvatar';
import { useDarkMode } from '../context/DarkModeContext';
function Header({ onNavOpen }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex justify-between bg-component border-0 border-b border-component shadow-md shadow-zinc-200 font-bold items-center px-6 py-5">
      <div className="flex gap-x-4">
        <button
          onClick={onNavOpen}
          className="flex justify-center bg-transparent items-center rounded-md size-8 hover:bg-primary-500/10 p-2"
        >
          <MdArrowBackIosNew className="size-4 text-primary-700" />
        </button>
        <p className="text-xl font-bold radial-text hidden sm:block">
          FreelanceHub
        </p>
      </div>

      <div className="flex justify-between gap-x-2 items-center">
        {/* <LogoutHeaderBtn className="lg:hidden" /> */}
        <ToggleTheme isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <UserAvatarHeader className="lg:hidden" />
      </div>
    </div>
  );
}

export default Header;
