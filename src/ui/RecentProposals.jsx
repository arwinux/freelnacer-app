import RecentProposalCard from './RecentProposalCard';

function RecentProposals() {
  return (
    <div className="w-full ring-border flex flex-1 flex-col group justify-between gap-x-2 gap-y-5 p-8 cursor-default select-none dashboard-static-container hover:-translate-y-3! duration-400!">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-2">
          <p className="font-bold text-xl sm:text-3xl text-title">
            Recent Proposals
          </p>
          <span className="text-sm text-subtitle">
            Latest opportunities in the marketplace
          </span>
        </div>
      </div>
      <RecentProposalCard />
      <RecentProposalCard />
      <RecentProposalCard />
      <RecentProposalCard />
      <RecentProposalCard />
    </div>
  );
}

export default RecentProposals;
