import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { GoTag } from 'react-icons/go';
import { LuClock2, LuDollarSign } from 'react-icons/lu';
import toNumbersWithComma from '../../utils/toNumbersWithComma';
import toDateShort from '../../utils/toDateShort';

function ProjectFrViewDetails({ project }) {
  return (
    <div className='flex flex-col orange-container-proposal overflow-hidden bg-component shadow-title shadow-2xl/5'>
      <div className='w-full h-2 bg-radial-back'></div>
      <div className='w-full flex flex-col p-8 border-black shadow-xl'>
        <div className='flex items-center gap-x-3'>
          <FiBriefcase className='size-6 text-primary-500' />
          <div className='flex justify-center items-center gap-x-4'>
            <span
              className={`badge-state ${
                project?.status === 'OPEN' ? 'badge-success' : 'badge-danger'
              }  `}
            >
              {project?.status}
            </span>
          </div>
        </div>
        <div className='mt-6 flex flex-col justify-center'>
          <p className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl w-full sm:max-w-4xl font-bold text-title text-shadow'>
            {project?.title}
          </p>
        </div>

        <div className='flex flex-col gap-y-8 mt-4'>
          <div className='flex flex-col'>
            <p className='text-lg text-subtitle font-semibold'>
              {project.description}
            </p>
          </div>

          <div className='flex flex-col'>
            <span className='text-sm uppercase text-subtitle font-bold tracking-wider mb-3'>
              Skills Required
            </span>
            <p className='flex flex-wrap gap-2 items-start'>
              {project.tags.map((tag, index) => (
                <span key={tag + index} className='badge-projectfr-detail'>
                  <GoTag />
                  {tag}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className='h-0.5 bg-gray-300 my-6'></div>

        <div className='grid xl:grid-cols-3 gap-x-6 gap-y-3'>
          <div className='flex gap-x-4 items-center p-4 hover:scale-105 cursor-default select-none transition-all duration-300 rounded-xl bg-linear-to-br from-greenfull/30 via-greenfull/40 to-greenfull'>
            <LuDollarSign className='size-8 text-green-800' />

            <div className='flex-col'>
              <span className='uppercase text-sm font-bold text-green-800'>
                budget
              </span>
              <p className='lg:text-xl 2xl:text-2xl font-bold text-title'>
                <span className='mr-1'>$</span>
                {`${toNumbersWithComma(project.budget)}`}
              </p>
            </div>
          </div>

          <div className='flex gap-x-4 items-center p-4 hover:scale-105 cursor-default select-none transition-all duration-300 rounded-xl bg-linear-to-br from-bluefull/30 via-bluefull/40 to-bluefull'>
            <FiCalendar className='size-8 text-blue-800' />

            <div className='flex-col'>
              <span className='uppercase text-sm font-bold text-blue-800'>
                budget
              </span>
              <p className='lg:text-xl 2xl:text-2xl font-bold text-title'>
                {toDateShort(project.deadline)}
              </p>
            </div>
          </div>
          <div className='flex gap-x-4 items-center p-4 hover:scale-105 cursor-default select-none transition-all duration-300 rounded-xl bg-linear-to-br from-orangefull/30 via-orangefull/40 to-orangefull'>
            <FiCalendar className='size-8 text-primary-800' />

            <div className='flex-col'>
              <span className='uppercase text-sm font-bold text-primary-800'>
                Posted by
              </span>
              <p className='text-xl font-bold text-title'>
                {project.owner.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectFrViewDetails;
