import { FaArrowLeft } from 'react-icons/fa';
import Empty from '../../ui/Empty';
import useNavigateBack from '../../hooks/useNavigateBack';
import { useLocation } from 'react-router-dom';
import FreelancerProposalCard from './FreelancerProposalCard';
import toNumbersWithComma from '../../utils/toNumbersWithComma';
import truncateText from '../../utils/truncateText';
import filterProposalsByStatus from '../../utils/filterProposalsByStatus';
import AnimatedListItem from '../../ui/FrameMotion';

function FreelancerProposalsViewGrid({ proposals, status }) {
  const navigateBack = useNavigateBack();
  const location = useLocation();
  const canChangeStatus = location.state?.canChangeStatus ?? false;

  if (!proposals?.length)
    return (
      <Empty
        className='mt-10'
        resourceName='No proposals found'
        iconbtn={<FaArrowLeft className='size-6' />}
        textbtn='Go back'
        onClick={navigateBack}
      />
    );

  return (
    <div className='flex flex-col overflow-hidden'>
      <div className='w-full flex flex-col p-4 sm:p-8 border-black shadow-xl'>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-4 gap-x-8 gap-y-12'>
          {filterProposalsByStatus(proposals, status).map((proposal, index) => (
            <AnimatedListItem key={proposal._id}>
              <FreelancerProposalCard
                key={proposal._id}
                id={proposal._id}
                title={proposal?.title}
                projectTitle={proposal?.project.title}
                status={proposal.status}
                description={truncateText(proposal?.description, 100)}
                price={toNumbersWithComma(proposal.price)}
                duration={proposal.duration}
                number={index + 1}
                canChangeStatus={canChangeStatus}
              />
            </AnimatedListItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FreelancerProposalsViewGrid;
