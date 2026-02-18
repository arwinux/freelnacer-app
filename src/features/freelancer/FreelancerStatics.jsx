import toNumbersWithComma from '../../utils/toNumbersWithComma';
import {
  LuDollarSign,
  LuFileText,
  LuTarget,
  LuTrendingUp,
} from 'react-icons/lu';
import { FiAward, FiBriefcase } from 'react-icons/fi';
import StatSkeleton from '../../ui/StaticSkeleton';
import useUser from '../authentication/useUser';

function FreelancerStatics({
  proposals,
  proposalsIsLoading,
  projects,
  projectsIsLoading,
}) {
  const { isLoading: userProfileIsLoading, user } = useUser();

  const userId = userProfileIsLoading ? null : user._id;
  const userProposals = proposalsIsLoading
    ? null
    : proposals.filter((p) => p.user === userId);

  const allOpenProjects = projectsIsLoading
    ? null
    : projects.filter((p) => p.status === 'OPEN');
  const numberOfAllProjects = projectsIsLoading ? null : allOpenProjects.length;

  // ----------------------------------------------------------
  const numberOfProposals = proposalsIsLoading ? null : userProposals.length;
  const numberOfPendingProposals = proposalsIsLoading
    ? null
    : userProposals.filter((p) => p.status === 1).length;

  const numberOfAcceptingProposals = proposalsIsLoading
    ? null
    : userProposals.filter((p) => p.status === 2).length;

  const sumOfBids = proposalsIsLoading
    ? 0
    : userProposals.reduce((total, proposal) => total + proposal.price, 0);
  return (
    <div>
      <div className='px-5'>
        <div className='w-full relative bottom-12 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 grid-flow-row gap-x-7 gap-y-5 lg:max-w-7xl mx-auto'>
          <div className='flex flex-col dashboard-static-container overflow-hidden'>
            <div className='px-1'>
              <div className='w-full h-2 rounded-t-4xl bg-radial-back'></div>
            </div>
            <div className='w-full ring-border flex-1 flex flex-col gap-y-5 p-5 select-none'>
              <div className='flex justify-between gap-x-2'>
                <div className='flex flex-col gap-y-2'>
                  <span className='text-subtitle text-sm font-bold uppercase'>
                    My Proposals
                  </span>
                  <div className='flex text-title text-2xl sm:text-3xl xl:text-5xl font-extrabold items-center gap-x-2'>
                    {proposalsIsLoading ? (
                      <StatSkeleton width='w-24' />
                    ) : (
                      <span>{numberOfProposals}</span>
                    )}
                  </div>

                  <span className='text-xs text-subtitle/80'>
                    {proposalsIsLoading
                      ? 'Loading projects...'
                      : 'Submited bids'}
                  </span>
                </div>
                <span className='flex justify-center items-center hover:rotate-12 hover:scale-125 hover:animate-spin shimmer-infinite transition-all size-14 bg-radial-back rounded-2xl'>
                  <LuFileText className='size-7 text-component' />
                </span>
              </div>
              <div className='flex items-center gap-x-2 bg-emerald-300/10 border border-emerald-200 rounded-xl px-2 py-2'>
                <LuTrendingUp className='size-4 text-emerald-600' />
                {proposalsIsLoading ? (
                  <StatSkeleton width='w-12' />
                ) : (
                  <span className='font-bold text-emerald-700'>
                    {numberOfPendingProposals} pending
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className='flex flex-col dashboard-static-container overflow-hidden'>
            <div className='px-1'>
              <div className='w-full h-2 rounded-t-4xl bg-radial-back'></div>
            </div>
            <div className='w-full ring-border flex-1 flex flex-col gap-y-5 p-5 select-none'>
              <div className='flex justify-between gap-x-2'>
                <div className='flex flex-col gap-y-2'>
                  <span className='text-subtitle text-sm font-bold uppercase'>
                    Accepted
                  </span>
                  <div className='flex text-title text-2xl sm:text-3xl xl:text-5xl font-extrabold items-center gap-x-2'>
                    <span>
                      <span>
                        {proposalsIsLoading ? (
                          <StatSkeleton width='w-12' />
                        ) : (
                          <span>{numberOfAcceptingProposals}</span>
                        )}
                      </span>
                    </span>
                  </div>
                  <span className='text-xs text-subtitle/80'>Won projects</span>
                </div>
                <span className='flex justify-center hover:rotate-12 hover:scale-125 hover:animate-spin shimmer-infinite transition-all items-center size-14 bg-radial-back rounded-2xl'>
                  <FiAward className='size-7 text-component' />
                </span>
              </div>
            </div>
          </div>

          <div className='flex flex-col dashboard-static-container overflow-hidden'>
            <div className='px-1'>
              <div className='w-full h-2 rounded-t-4xl bg-radial-back'></div>
            </div>
            <div className='w-full ring-border flex-1 flex flex-col gap-y-5 p-5 select-none'>
              <div className='flex justify-between gap-x-2'>
                <div className='flex flex-col gap-y-2'>
                  <span className='text-subtitle text-sm font-bold uppercase'>
                    Open Projects
                  </span>
                  <div className='flex text-title text-2xl sm:text-3xl xl:text-5xl font-extrabold items-center gap-x-2'>
                    <span>
                      <span>
                        {proposalsIsLoading ? (
                          <StatSkeleton width='w-12' />
                        ) : (
                          <span>{numberOfAllProjects}</span>
                        )}
                      </span>
                    </span>
                  </div>
                  <span className='text-xs text-subtitle/80'>
                    Available now
                  </span>
                </div>
                <span className='flex justify-center hover:rotate-12 hover:scale-125 hover:animate-spin shimmer-infinite transition-all items-center size-14 bg-radial-back rounded-2xl'>
                  <FiBriefcase className='size-7 text-component' />
                </span>
              </div>
            </div>
          </div>

          <div className='flex flex-col dashboard-static-container overflow-hidden'>
            <div className='px-1'>
              <div className='w-full h-2 rounded-t-4xl bg-radial-back'></div>
            </div>
            <div className='w-full ring-border flex-1 flex flex-col gap-y-5 p-5 select-none'>
              <div className='flex justify-between gap-x-2'>
                <div className='flex flex-col gap-y-2'>
                  <span className='text-subtitle text-sm font-bold uppercase'>
                    Total Bids
                  </span>
                  <div className='flex relative text-title text-2xl sm:text-3xl xl:text-2xl font-extrabold items-center gap-x-1'>
                    <span>$</span>
                    <span>
                      {proposalsIsLoading ? (
                        <StatSkeleton width='w-12' />
                      ) : (
                        <span>{toNumbersWithComma(sumOfBids)}</span>
                      )}
                    </span>
                  </div>
                </div>
                <span className='flex justify-center hover:rotate-12 hover:scale-125 hover:animate-spin shimmer-infinite transition-all items-center size-14 bg-radial-back rounded-2xl'>
                  <LuDollarSign className='size-7 text-component' />
                </span>
              </div>
              <span className='text-xs text-subtitle/80'>Proposed value</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreelancerStatics;
