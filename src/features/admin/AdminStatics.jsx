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
import useCategories from '../categories/useCategories';

function AdminStatics({
  proposals,
  proposalsIsLoading,
  projects,
  projectsIsLoading,
}) {
  const allOpenProjects = projectsIsLoading
    ? null
    : projects.filter((p) => p.status === 'OPEN');

  const numberOfAllOpenProjects = projectsIsLoading
    ? 0
    : allOpenProjects.length;
  const numberOfAllProjects = projectsIsLoading ? 0 : projects.length;

  const totalBudget = projectsIsLoading
    ? 0
    : projects.reduce((acc, cur) => acc + cur.budget, 0);

  // ----------------------------------------------------------
  const numberOfProposals = proposalsIsLoading ? 0 : proposals.length;
  const numberOfPendingProposals = proposalsIsLoading
    ? 0
    : proposals.filter((p) => p.status === 1).length;

  const { categories, isLoading: categoriesIsLoading } = useCategories();
  const numberOfCategories = categoriesIsLoading ? 0 : categories.length;

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
                    Total Projects
                  </span>
                  <div className='flex text-title text-2xl sm:text-3xl xl:text-5xl font-extrabold items-center gap-x-2'>
                    {projectsIsLoading ? (
                      <StatSkeleton width='w-24' />
                    ) : (
                      <span>{numberOfAllProjects}</span>
                    )}
                  </div>

                  <span className='text-xs text-subtitle/80'>
                    {projectsIsLoading
                      ? 'Loading projects...'
                      : 'platform projects'}
                  </span>
                </div>
                <span className='flex justify-center items-center hover:rotate-12 hover:scale-125 hover:animate-spin shimmer-infinite transition-all size-14 bg-radial-back rounded-2xl'>
                  <FiBriefcase className='size-7 text-component' />
                </span>
              </div>
              <div className='flex items-center gap-x-2 bg-emerald-300/10 border border-emerald-200 rounded-xl px-2 py-2'>
                <LuTrendingUp className='size-4 text-emerald-600' />
                {projectsIsLoading ? (
                  <StatSkeleton width='w-12' />
                ) : (
                  <span className='font-bold text-emerald-700'>
                    {numberOfAllOpenProjects} Open
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
                    TOTAL BUDGET
                  </span>
                  <div className='flex relative text-title text-2xl sm:text-3xl xl:text-2xl font-extrabold items-center gap-x-1'>
                    <span>$</span>
                    <span>
                      {projectsIsLoading ? (
                        <StatSkeleton width='w-12' />
                      ) : (
                        <span>{toNumbersWithComma(totalBudget)}</span>
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

          <div className='flex flex-col dashboard-static-container overflow-hidden'>
            <div className='px-1'>
              <div className='w-full h-2 rounded-t-4xl bg-radial-back'></div>
            </div>
            <div className='w-full ring-border flex-1 flex flex-col gap-y-5 p-5 select-none'>
              <div className='flex justify-between gap-x-2'>
                <div className='flex flex-col gap-y-2'>
                  <span className='text-subtitle text-sm font-bold uppercase'>
                    TOTAL PROPOSALS
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
                      ? 'Loading proposals...'
                      : 'platform proposals'}
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
                    {numberOfPendingProposals} Pending
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
                    CATEGORIES
                  </span>
                  <div className='flex text-title text-2xl sm:text-3xl xl:text-5xl font-extrabold items-center gap-x-2'>
                    <span>
                      <span>
                        {categoriesIsLoading ? (
                          <StatSkeleton width='w-12' />
                        ) : (
                          <span>{numberOfCategories}</span>
                        )}
                      </span>
                    </span>
                  </div>
                  <span className='text-xs text-subtitle/80'>
                    Project categories
                  </span>
                </div>
                <span className='flex justify-center hover:rotate-12 hover:scale-125 hover:animate-spin shimmer-infinite transition-all items-center size-14 bg-radial-back rounded-2xl'>
                  <LuTarget className='size-7 text-component' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminStatics;
