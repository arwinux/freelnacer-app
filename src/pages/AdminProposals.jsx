import { useState } from 'react';
import { PiPlusCircleBold } from 'react-icons/pi';
import Empty from '../ui/Empty';
import LoadingPage from '../ui/LoadingPage';
import PageHeader from '../ui/PageHeader';
import useProposals from '../features/proposals/useProposals';
import useUser from '../features/authentication/useUser';
import proposalCounts from '../utils/proposalCounts';
import useNavigateBrowseProjects from '../hooks/useNavigateBrowseProjects';
import FilterProposals from '../ui/filterProposals';
import FreelancerProposalsViewGrid from '../features/proposals/FreelancerProposalsViewGrid';

function AdminProposals() {
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

export default AdminProposals;
