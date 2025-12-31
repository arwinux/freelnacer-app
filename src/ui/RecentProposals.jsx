import toNumbersWithComma from '../utils/toNumbersWithComma';
import { FaDollarSign, FaRegClock } from 'react-icons/fa';
import { LuDollarSign } from 'react-icons/lu';

function RecentProposals() {
  const statusStyle = [
    {
      label: 'Decline',
      className: 'badge-danger',
    },
    {
      label: 'Pending',
      className: 'badge-secondary',
    },
    {
      label: 'Accept',
      className: 'badge-success',
    },
  ];

  return (
    <div className="w-full ring-border flex flex-1 flex-col group justify-between gap-x-2 gap-y-5 p-8 cursor-default select-none dashboard-static-container hover:-translate-y-3! duration-400!">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-2">
          <p className="font-bold text-xl sm:text-3xl text-title">
            Recent Proposals
          </p>
          <span className="text-sm text-subtitle">
            Latest opportunities in the marketplace
          </span>
        </div>
      </div>

      <div className="w-full ring-border flex flex-1 flex-col group justify-between gap-x-2 gap-y-5 p-6 cursor-default select-none dashboard-static-container hover:translate-y-0! duration-400!">
        <div className="project-card__header gap-4 w-full flex justify-between items-center">
          <div className="flex justify-center items-center">
            <span className="text-base font-bold line-clamp-2 text-title">
              Redesign Company update UI/UX more than me
            </span>
          </div>

          <div className="flex justify-center items-center gap-x-4">
            <span className={`badge-state ${statusStyle[1].className}`}>
              {statusStyle[1].label}
            </span>
          </div>
        </div>

        <p className="text-wrap text-sm text-subtitle font-medium line-clamp-2">
          Build a complete e-commerce solution with product management, shopping
          cart, user authentication, and payment integration
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-x-2 gap-y-3">
          <div className="flex gap-x-3 flex-1">
            <span className="flex justify-center items-center size-10 rounded-xl shadow-md bg-green-100">
              <LuDollarSign className="size-5 text-green-600" />
            </span>
            <div className="flex justify-center items-center">
              <FaDollarSign className="size-4 text-green-600" />
              <span className="font-bold text-green-600">
                {toNumbersWithComma(26000000000)}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <FaRegClock className="size-4 text-subtitle" />
            <span className="font-semibold text-sm text-subtitle">6 Days</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProposals;
