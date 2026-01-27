import useProposals from "../features/proposals/useProposals";
import RecentProposalCard from "./RecentProposalCard";
import StatSkeleton from "./StaticSkeleton";

function RecentProposals() {
  const { isLoading, proposals } = useProposals();

  return (
    <div className="w-full ring-border flex flex-1 flex-col group gap-x-2 gap-y-5 p-8 cursor-default select-none dashboard-static-container hover:-translate-y-3! duration-400!">
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

      {isLoading ? (
        <StatSkeleton />
      ) : (
        proposals
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3)
          .map((proposal) => (
            <RecentProposalCard
              key={proposal?._id}
              projectitle={proposal?.project}
              description={proposal?.description}
              status={proposal?.status}
              price={proposal?.price}
              duration={proposal?.duration}
            />
          ))
      )}
    </div>
  );
}

export default RecentProposals;
