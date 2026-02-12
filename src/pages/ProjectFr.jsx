import ProposalsViewGrid from '../features/project/ProposalsViewGrid';
import useProject from '../features/project/useProject';
import LoadingPage from '../ui/LoadingPage';
import ProjectFrViewDetails from '../features/project/ProjectFrViewDetails';
import useUser from '../features/authentication/useUser';
import { LuClock2 } from 'react-icons/lu';
import SendProposalBtn from '../ui/SendProposalBtn';

function ProjectFr() {
  const { isLoading, project } = useProject();
  const { isLoading: userProfileIsLoading, user } = useUser();
  const userId = userProfileIsLoading ? null : user._id;

  const isProposalSubmited = isLoading
    ? null
    : project.proposals.filter((p) => p.user._id === userId).length > 0;

  if (isLoading) return <LoadingPage />;
  console.log(project.proposals);
  console.log(isProposalSubmited);

  return (
    <div className='flex flex-col w-full mt-14'>
      <div className='px-5'>
        <div className='w-full flex flex-col gap-y-10 lg:max-w-7xl mx-auto mb-5'>
          <ProjectFrViewDetails project={project} />
          <SendProposalBtn
            project={project}
            isProposalSubmited={isProposalSubmited}
          />

          <ProposalsViewGrid proposals={project.proposals} />
        </div>
      </div>
    </div>
  );
}

export default ProjectFr;
