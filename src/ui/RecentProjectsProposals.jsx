import RecentProposals from './RecentProposals';
import RecentProjects from './RecentProjects';

function RecentProjectsProposals({ projects, isLoading }) {
  return (
    <div className='px-6 my-10'>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-6 lg:max-w-7xl mx-auto'>
        <RecentProjects projects={projects} isLoading={isLoading} />
        <RecentProposals />
      </div>
    </div>
  );
}

export default RecentProjectsProposals;
