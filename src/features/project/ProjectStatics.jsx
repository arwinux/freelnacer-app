import toNumbersWithComma from '../../utils/toNumbersWithComma';
import toDateShort from '../../utils/toDateShort';
import { LuClock2, LuDollarSign, LuFileText } from 'react-icons/lu';
import { FiCalendar } from 'react-icons/fi';
import { IoMdTrendingUp } from 'react-icons/io';
import { GoZap } from 'react-icons/go';

function ProjectStatics({ project }) {
  return (
    <div className="px-5">
      <div className="w-full relative bottom-10 flex flex-col md:flex-row flex-wrap gap-x-7 gap-y-5 lg:max-w-6xl mx-auto">
        <div className="w-full ring-border flex-1 flex flex-col gap-y-5 static-container p-5 cursor-pointer select-none">
          <div className="flex justify-between">
            <span className="flex justify-center items-center shimmer-infinite size-14 bg-linear-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-sh-200 rounded-2xl">
              <LuDollarSign className="size-7 text-component" />
            </span>
            <IoMdTrendingUp className="size-6 text-emerald-500" />
          </div>
          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-medium text-subtitle">
              Project Budget
            </span>
            <div className="flex text-title text-2xl sm:text-3xl xl:text-4xl font-extrabold items-center gap-x-2">
              <span>$</span>
              <span>{toNumbersWithComma(project.budget)}</span>
            </div>
          </div>
        </div>
        <div className="w-full ring-border flex-1 flex flex-col gap-y-5 static-container p-5 cursor-pointer select-none">
          <div className="flex justify-between">
            <span className="flex justify-center items-center shimmer-infinite size-14 bg-linear-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-sh-200 rounded-2xl">
              <FiCalendar className="size-7 text-component" />
            </span>
            <LuClock2 className="size-6 text-blue-500" />
          </div>
          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-medium text-subtitle">Deadline</span>
            <span className="text-2xl text-title sm:text-3xl xl:text-4xl font-extrabold">
              {toDateShort(project.deadline)}
            </span>
          </div>
        </div>
        <div className="w-full ring-border flex-1 flex flex-col gap-y-5 static-container p-5 cursor-pointer select-none">
          <div className="flex justify-between">
            <span className="flex justify-center items-center shimmer-infinite size-14 bg-radial-back rounded-2xl shadow-lg shadow-primary-sh-200">
              <LuFileText className="size-7 text-component" />
            </span>
            <GoZap className="size-6 text-primary-500" />
          </div>
          <div className="flex flex-col gap-y-1">
            <span className="text-sm font-medium text-subtitle">
              Proposals Received
            </span>
            <span className="text-2xl text-title sm:text-3xl xl:text-4xl font-extrabold">
              {project?.proposals?.length ?? 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectStatics;
