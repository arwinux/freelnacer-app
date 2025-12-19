import { Switch } from '@headlessui/react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { LuCircleCheckBig } from 'react-icons/lu';
import {
  MdDarkMode,
  MdLightMode,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from 'react-icons/md';

export default function ToggleTheme({ isDarkMode, toggleDarkMode }) {
  return (
    <div>
      <Switch
        checked={isDarkMode}
        onClick={toggleDarkMode}
        className={`${
          isDarkMode
            ? 'bg-linear-to-br from-yellow-300 to-primary-600'
            : 'bg-linear-to-br from-blue-500 to-gray-600'
        }
          relative inline-flex h-9 w-18 shrink-0 cursor-pointer justify-start items-center rounded-full transition-colors duration-200 ease-in-out   focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <div
          className={`
          pointer-events-none size-7 flex justify-center items-center
          rounded-full bg-component shadow-lg
          transition-transform duration-300
          ${isDarkMode ? 'translate-x-1 rotate-0' : 'translate-x-10 rotate-360'}
        `}
        >
          {isDarkMode ? (
            <MdLightMode className="size-5 text-primary-400" />
          ) : (
            <MdDarkMode className="size-4 text-blue-500" />
          )}
        </div>

        <div
          aria-hidden="true"
          className={`absolute ${
            !isDarkMode ? 'translate-x-1' : 'translate-x-10'
          }
            pointer-events-none size-7 flex justify-center items-center transform rounded-full `}
        >
          {isDarkMode ? (
            <MdOutlineDarkMode className="size-4 text-component" />
          ) : (
            <MdOutlineLightMode className="size-5 text-component" />
          )}
        </div>
      </Switch>
    </div>
  );
}
