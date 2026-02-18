import toNumbersWithComma from '../utils/toNumbersWithComma';
import { FaDollarSign, FaRegFolderOpen } from 'react-icons/fa';
import { LuDollarSign } from 'react-icons/lu';
import { FiCalendar } from 'react-icons/fi';
import toDateShort from '../utils/toDateShort';
import { Link } from 'react-router-dom';
import useUser from '../features/authentication/useUser';

function RecentProjectCard({
  id,
  title,
  status,
  category,
  description,
  budget,
  deadline,
}) {
  return (
    <Link
      className='w-full hover:bg-primary-100 ring-border flex flex-col group justify-between gap-x-2 gap-y-5 p-6 cursor-pointer select-none dashboard-static-container hover:translate-y-0! duration-400!'
      to={id}
      state={{ canChangeStatus: false }}
    >
      <div className='project-card__header gap-4 w-full flex justify-between items-center'>
        <div className='flex justify-center items-center  '>
          <span className='text-base font-bold line-clamp-2 text-title'>
            {title}
          </span>
        </div>

        <div className='flex justify-center items-center gap-x-4'>
          <span
            className={`badge-state ${
              status === 'OPEN' ? 'badge-success' : 'badge-danger'
            }  `}
          >
            {status}
          </span>
        </div>
      </div>
      <div className='flex w-fit justify-center items-center text-xs gap-x-2 rounded-xl px-2.5 py-0.5 font-medium text-primary-700 bg-primary-100 border-2 border-primary-300'>
        <FaRegFolderOpen />
        <p className='font-semibold'>{category}</p>
      </div>
      <p className='text-wrap text-sm text-subtitle font-medium line-clamp-2'>
        {description}
      </p>
      <div className='flex flex-col sm:flex-row flex-wrap justify-between items-center gap-x-2 gap-y-3'>
        <div className='flex gap-x-3 flex-1'>
          <span className='flex justify-center items-center size-10 rounded-xl shadow-md bg-green-100'>
            <LuDollarSign className='size-5 text-green-600' />
          </span>
          <div className='flex justify-center items-center'>
            <FaDollarSign className='size-4 text-green-600' />
            <span className='font-bold text-green-600'>
              {toNumbersWithComma(budget)}
            </span>
          </div>
        </div>
        <div className='flex items-center gap-x-2'>
          <FiCalendar className='size-4 text-subtitle' />
          <span className='font-semibold text-sm text-subtitle'>
            {toDateShort(deadline)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default RecentProjectCard;
