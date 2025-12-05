import truncateText from '../../utils/truncateText';
import toNumbersWithComma from '../../utils/toNumbersWithComma';
import ProposalsCard from './ProposalsCard';
import useNavigateBack from '../../hooks/useNavigateBack';
import Empty from '../../ui/Empty';
import { PiPlusCircleBold } from 'react-icons/pi';
import { FiBriefcase } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';

function ProposalsViewGrid({ proposals }) {
  const navigateBack = useNavigateBack();

  if (!proposals?.length)
    return (
      <Empty
        className="mt-10"
        resourceName="No proposals found"
        iconbtn={<FaArrowLeft className="size-6" />}
        textbtn="Go back"
        onClick={navigateBack}
      />
    );

  return (
    <div className="flex flex-col orange-container-proposal overflow-hidden bg-component">
      <div className="w-full h-2 bg-radial-back"></div>
      <div className="w-full flex flex-col p-4 sm:p-8 border-black shadow-xl">
        <div className="flex items-center gap-x-3">
          <span className="flex justify-center items-center size-12 bg-radial-back rounded-2xl">
            <FiBriefcase className="size-7 text-component" />
          </span>

          <span className="text-2xl font-bold">Proposals</span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-4 gap-x-8 gap-y-12">
          {proposals.map((proposal) => (
            <ProposalsCard
              key={proposal._id}
              id={proposal._id}
              title={proposal?.title}
              status={proposal.status}
              description={truncateText(proposal?.description, 100)}
              price={toNumbersWithComma(proposal.price)}
              duration={proposal.duration}
              client={proposal.user?.name || '-'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProposalsViewGrid;
