import { IoMdArrowForward } from 'react-icons/io';
import RecentProjectCard from './RecentProjectCard';
import StatSkeleton from './StaticSkeleton';
function RecentProjects({ projects = [], isLoading }) {
  return (
    <div className="w-full ring-border flex flex-1 flex-col group gap-x-2 gap-y-5 p-8 cursor-default select-none dashboard-static-container hover:-translate-y-3! duration-400!">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-2">
          <p className="font-bold text-xl sm:text-3xl text-title">
            Recent Projects
          </p>
          <span className="text-sm text-subtitle">
            Latest opportunities in the marketplace
          </span>
        </div>
        <div className="flex items-center flex-nowrap gap-x-2 transition-all text-primary-500">
          <span className="font-semibold text-nowrap">View All</span>
          <IoMdArrowForward />
        </div>
      </div>
      {isLoading ? (
        <StatSkeleton />
      ) : (
        projects
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3)
          .map((project) => (
            <RecentProjectCard
              key={project?._id}
              id={project?._id}
              title={project?.title}
              status={project?.status}
              category={project?.category.title}
              description={project?.description}
              budget={project?.budget}
              deadline={project?.deadline}
            />
          ))
      )}
    </div>
  );
}

export default RecentProjects;
