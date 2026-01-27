import { useState } from 'react';
import useToggleProjectStatus from './useToggleProjectStatus';
import { LuCircleCheckBig } from 'react-icons/lu';
import Loading from '../../ui/Loading';
import Toggle from '../../ui/Toggle';
import { GoLock } from 'react-icons/go';

export default function ToggleProjectStatus({ project, onStatusChange }) {
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const [enabled, setEnabled] = useState(project.status === 'OPEN');

  const toggleHandler = () => {
    const newEnabled = !enabled;
    setEnabled(newEnabled);

    const newStatus = newEnabled ? 'OPEN' : 'CLOSED';

    toggleProjectStatus({
      id: project._id,
      data: { status: newStatus },
    });
    onStatusChange?.(newStatus);
  };

  return (
    <div className="text-title flex justify-between items-center p-5 h-20 bg-component rounded-2xl rounded-t-none shadow">
      <div className="flex gap-x-3">
        <span
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 bg-linear-to-br ${
            enabled
              ? 'bg-linear-to-br from-emerald-400 to-emerald-600 shadow-md shadow-emerald-sh-200'
              : 'bg-linear-to-br from-gray-300 to-gray-400 shadow-lg shadow-gray-200'
          }  `}
        >
          {enabled ? (
            <LuCircleCheckBig className="size-6 text-color" />
          ) : (
            <GoLock className="size-6 text-color" />
          )}
        </span>
        <div className="flex flex-col">
          <p className="text-subtitle font-medium text-sm">Project Status</p>
          <p
            className={`${
              enabled ? 'text-emerald-600' : 'text-gray-600'
            } text-sm font-bold`}
          >
            {enabled ? 'Open for Proposals' : 'Closed'}
          </p>
        </div>
      </div>

      {isUpdating ? (
        <Loading color="var(--color-primary-600)" />
      ) : (
        <Toggle enabled={enabled} onChange={toggleHandler} />
      )}
    </div>
  );
}
