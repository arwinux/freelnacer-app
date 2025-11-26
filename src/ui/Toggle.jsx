import { Switch } from '@headlessui/react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { LuCircleCheckBig } from 'react-icons/lu';

export default function Toggle({ enabled, onChange }) {
  return (
    <div>
      <Switch
        checked={enabled}
        onChange={onChange}
        className={`${
          enabled
            ? 'bg-linear-to-br from-emerald-400 to-emerald-600'
            : 'bg-linear-to-br from-gray-300 to-gray-400'
        }
          relative inline-flex h-11 w-24 shrink-0 cursor-pointer justify-start items-center rounded-full transition-colors duration-200 ease-in-out   focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <div
          aria-hidden="true"
          className={`${enabled ? 'translate-x-14' : 'translate-x-2'}
            pointer-events-none size-8 flex justify-center items-center transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out`}
        >
          {enabled ? (
            <LuCircleCheckBig className="size-4 text-emerald-600" />
          ) : (
            <IoCloseCircleOutline className="size-5 text-gray-400" />
          )}
        </div>
      </Switch>
    </div>
  );
}
