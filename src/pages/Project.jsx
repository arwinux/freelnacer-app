import ProposalsViewGrid from '../features/project/ProposalsViewGrid';
import useProject from '../features/project/useProject';
import LoadingPage from '../ui/LoadingPage';
import ProjectViewDetails from '../features/project/ProjectViewDetails';
import ProjectHeader from '../features/project/ProjectHeader';
import ProjectStatics from '../features/project/ProjectStatics';

function Project() {
  const { isLoading, project } = useProject();

  if (isLoading) return <LoadingPage />;

  return (
    <div className='flex flex-col w-full'>
      <ProjectHeader project={project} />
      <ProjectStatics project={project} />

      <div className='px-5'>
        <div className='w-full flex flex-col gap-y-10 lg:max-w-6xl mx-auto mb-5'>
          <ProjectViewDetails project={project} />
          <ProposalsViewGrid proposals={project.proposals} />
        </div>
      </div>
    </div>
  );
}

export default Project;
