import { FaArrowLeft } from 'react-icons/fa';
import { FiBriefcase, FiCalendar, FiTarget } from 'react-icons/fi';
import { IoMdTrendingUp } from 'react-icons/io';
import {
  LuCircleCheckBig,
  LuClock2,
  LuDollarSign,
  LuFileText,
} from 'react-icons/lu';
import toNumbersWithComma from '../utils/toNumbersWithComma';
import { GoTag, GoZap } from 'react-icons/go';
import ProposalsViewGrid from '../features/proposals/ProposalsViewGrid';
import useProject from '../features/projects/useProject';
import LoadingPage from '../ui/LoadingPage';
import toDateShort from '../utils/toDateShort';
import useNavigateBack from '../hooks/useNavigateBack';

function Project() {
  const navigateBack = useNavigateBack();
  const { isLoading, project } = useProject();

  if (isLoading) return <LoadingPage />;

  return (
    <div className="flex flex-col w-full">
      <div className="w-full py-20 px-6 bg-radial-back opacity-90">
        <div className="flex flex-col justify-center lg:max-w-6xl mx-auto">
          <button
            onClick={navigateBack}
            className="inline-flex self-start items-center gap-x-4 transition-all duration-400 hover:bg-component/20 rounded-lg font-bold text-sm text-color px-4 py-3 mb-8"
          >
            <FaArrowLeft className="size-3" />
            <span>Back to Projects</span>
          </button>

          <div className="flex flex-col gap-y-7">
            <div className="flex gap-x-3">
              <div
                className={`flex justify-center items-center gap-x-2 text-color text-sm font-bold ${
                  project?.status === 'OPEN' ? 'bg-emerald-500' : 'bg-red-500'
                } px-4 py-2 rounded-full shadow-xl`}
              >
                <LuCircleCheckBig className="size-4" />
                <span className="">{project?.status}</span>
              </div>

              <div className="flex justify-center items-center gap-x-2 text-sm font-bold backdrop-blur-xl badge-glass px-4 py-2 rounded-full shadow-xl">
                <FiTarget className="size-4" />
                <span className="">{project?.category.title}</span>
              </div>
            </div>

            <div className="h-30 flex flex-col justify-center">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl w-full sm:max-w-4xl font-bold text-color/90 text-shadow">
                {project?.title}
              </p>
            </div>

            <div className="flex items-center gap-x-4">
              <div className="flex justify-center items-center size-12 text-xl rounded-xl font-bold backdrop-blur-xl badge-glass">
                <span>{project.freelancer?.name[0] || '-'}</span>
              </div>

              <div className="flex flex-col">
                <span className="text-color/70 text-sm">Posted by</span>
                <p className="text-color font-bold">
                  {project.freelancer?.name || '-'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="w-full relative bottom-10 flex flex-col md:flex-row flex-wrap gap-x-7 gap-y-5 lg:max-w-6xl mx-auto">
          <div className="w-full flex-1 flex flex-col gap-y-5 static-container p-5 cursor-pointer select-none">
            <div className="flex justify-between itemssta">
              <span className="flex justify-center items-center size-14 bg-linear-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-200 rounded-2xl">
                <LuDollarSign className="size-7 text-component" />
              </span>
              <IoMdTrendingUp className="size-6 text-emerald-500" />
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="text-sm font-medium text-subtitle">
                Project Budget
              </span>
              <div className="flex text-2xl sm:text-3xl xl:text-4xl font-extrabold items-center gap-x-2">
                <span>$</span>
                <span className="">{toNumbersWithComma(project.budget)}</span>
              </div>
            </div>
          </div>
          <div className="w-full flex-1 flex flex-col gap-y-5 static-container p-5 cursor-pointer select-none">
            <div className="flex justify-between itemssta">
              <span className="flex justify-center items-center size-14 bg-linear-to-br from-blue-400 to-blue-700 shadow-lg shadow-blue-200 rounded-2xl">
                <FiCalendar className="size-7 text-component" />
              </span>
              <LuClock2 className="size-6 text-blue-500" />
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="text-sm font-medium text-subtitle">
                Deadline
              </span>
              <span className="text-2xl sm:text-3xl xl:text-4xl font-extrabold">
                {toDateShort(project.deadline)}
              </span>
            </div>
          </div>
          <div className="w-full flex-1 flex flex-col gap-y-5 static-container p-5 cursor-pointer select-none">
            <div className="flex justify-between itemssta">
              <span className="flex justify-center items-center size-14 bg-radial-back rounded-2xl">
                <LuFileText className="size-7 text-component" />
              </span>
              <GoZap className="size-6 text-primary-500" />
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="text-sm font-medium text-subtitle">
                Proposals Received
              </span>
              <span className="text-2xl sm:text-3xl xl:text-4xl font-extrabold">
                {project?.proposals?.length ?? 0}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5">
        <div className="w-full flex flex-col gap-y-10 lg:max-w-6xl mx-auto  mb-5">
          <div className="flex flex-col orange-container-proposal overflow-hidden bg-component">
            <div className="w-full h-2 bg-radial-back"></div>
            <div className="w-full flex flex-col p-8 border-black shadow-xl">
              <div className="flex items-center gap-x-3">
                <span className="flex justify-center items-center size-12 bg-radial-back rounded-2xl">
                  <FiBriefcase className="size-7 text-component" />
                </span>

                <span className="text-2xl font-bold">Project Details</span>
              </div>

              <div className="flex flex-col gap-y-8 mt-12">
                <div className="flex flex-col">
                  <span className="text-sm uppercase text-subtitle font-bold tracking-wider mb-3">
                    Description
                  </span>
                  <p className="text-lg text-subtitle font-semibold">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm uppercase text-subtitle font-bold tracking-wider mb-3">
                    Skills Required
                  </span>
                  <p className="flex flex-wrap gap-2 items-start">
                    {project.tags.map((tag, index) => (
                      <span key={tag + index} className="badge-project-detail">
                        <GoTag />
                        {tag}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ProposalsViewGrid proposals={project.proposals} />
        </div>
      </div>
    </div>
  );
}

export default Project;
