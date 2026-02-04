import ProposalsViewGrid from '../features/project/ProposalsViewGrid';
import useProject from '../features/project/useProject';
import LoadingPage from '../ui/LoadingPage';
import ProjectFrViewDetails from '../features/project/ProjectFrViewDetails';

function ProjectFr() {
  const { isLoading, project } = useProject();

  if (isLoading) return <LoadingPage />;

  return (
    <div className='flex flex-col w-full'>
      <div className='px-5'>
        <div className='w-full flex flex-col gap-y-10 lg:max-w-7xl mx-auto mb-5'>
          <ProjectFrViewDetails project={project} />
          <ProposalsViewGrid proposals={project.proposals} />
        </div>
      </div>
    </div>
  );
}

export default ProjectFr;
