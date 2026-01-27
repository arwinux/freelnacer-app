import { Switch } from '@headlessui/react';
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
            ? 'bg-linear-to-br from-blue-500 to-blue-600'
            : 'bg-linear-to-br from-yellow-500 to-primary-500'
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
            <MdDarkMode className="size-4 text-blue-500" />
          ) : (
            <MdLightMode className="size-5 text-primary-400" />
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
            <MdOutlineLightMode className="size-5 text-component" />
          ) : (
            <MdOutlineDarkMode className="size-4 text-component" />
          )}
        </div>
      </Switch>
    </div>
  );
}
