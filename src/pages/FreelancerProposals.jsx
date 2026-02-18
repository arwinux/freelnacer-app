import { useState } from 'react';
import { PiPlusCircleBold } from 'react-icons/pi';
import useClientProjects from '../features/projects/useClientProjects';
import Empty from '../ui/Empty';
import ProjectCard from '../features/projects/ProjectCard';
import LoadingPage from '../ui/LoadingPage';
import truncateText from '../utils/truncateText';
import toNumbersWithComma from '../utils/toNumbersWithComma';
import toDateShort from '../utils/toDateShort';
import useNavigateCreateProject from '../hooks/useNavigateCreateProject';
import filteredProjects from '../utils/filterProjectsByStatus';
import AnimatedListItem from '../ui/FrameMotion';
import { AnimatePresence } from 'framer-motion';
import FilterProjects from '../ui/FilterProjects';
import PageHeader from '../ui/PageHeader';
import projectCounts from '../utils/projectCounts';
import useProposals from '../features/proposals/useProposals';
import useUser from '../features/authentication/useUser';
import proposalCounts from '../utils/proposalCounts';
import useNavigateBrowseProjects from '../hooks/useNavigateBrowseProjects';
import FilterProposals from '../ui/filterProposals';
import ProposalCard from '../features/proposals/FreelancerProposalCard';
import ProposalsViewGrid from '../features/project/ProposalsViewGrid';
import FreelancerProposalsViewGrid from '../features/proposals/FreelancerProposalsViewGrid';

function FreelancerProposals() {
  const { isLoading: userProfileIsLoading, user } = useUser();
  const { isLoading: proposalsIsLoading, proposals } = useProposals();

  const userId = userProfileIsLoading ? null : user._id;
  const userProposals = proposalsIsLoading
    ? null
    : proposals.filter((p) => p.user === userId);

  const [status, setStatus] = useState('all');
  const navigateBrowseProjects = useNavigateBrowseProjects();

  if (proposalsIsLoading) return <LoadingPage />;
  if (!userProposals.length)
    return (
      <Empty
        resourceName='No proposals found'
        iconbtn={<PiPlusCircleBold className='size-6' />}
        textbtn='Create your first proposal'
        onClick={navigateBrowseProjects}
      />
    );

  return (
    <div className='flex page-set flex-col mt-12'>
      <PageHeader
        badge='Freelancer proposals'
        title='My Proposals'
        description={'Manage and track your proposals'}
        color='red'
      />

      <FilterProposals
        status={status}
        setStatus={setStatus}
        counts={proposalCounts(userProposals)}
      />

      <FreelancerProposalsViewGrid proposals={userProposals} status={status} />
    </div>
  );
}

export default FreelancerProposals;
