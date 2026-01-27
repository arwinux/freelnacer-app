import toNumbersWithComma from '../../utils/toNumbersWithComma';
import {
  LuDollarSign,
  LuFileText,
  LuTarget,
  LuTrendingUp,
} from 'react-icons/lu';
import { FiBriefcase } from 'react-icons/fi';
import StatSkeleton from '../../ui/StaticSkeleton';
import useCategories from '../categories/useCategories';

function ClientStatics({ projects, isLoading }) {
  const { categories, isLoading: isCatLoading } = useCategories();

  const numberOfProjects = isLoading ? null : projects.length;
  const numberOfOpenProjects = isLoading
    ? null
    : projects.filter((p) => p.status === 'OPEN').length;

  const totalBudget = isLoading
    ? 0
    : projects.reduce((acc, cur) => acc + cur.budget, 0);

  const numberOfProposals = isLoading
    ? 0
    : projects.reduce((acc, cur) => acc + cur.proposals.length, 0);

  const numberOfCategories = isCatLoading ? 0 : categories.length;

  return (
    <div className="px-5">
      <div className="w-full relative bottom-12 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 grid-flow-row gap-x-7 gap-y-5 lg:max-w-7xl mx-auto">
        <div className="flex flex-col dashboard-static-container overflow-hidden">
          <div className="px-1">
            <div className="w-full h-2 rounded-t-4xl bg-radial-back"></div>
          </div>
          <div className="w-full ring-border flex-1 flex flex-col gap-y-5 p-5 select-none">
            <div className="flex justify-between gap-x-2">
              <div className="flex flex-col gap-y-2">
                <span className="text-subtitle text-sm font-bold uppercase">
                  Active Projects
                </span>
                <div className="flex text-title text-2xl sm:text-3xl xl:text-5xl font-extrabold items-center gap-x-2">
                  {isLoading ? (
                    <StatSkeleton width="w-24" />
                  ) : (
                    <span>{numberOfProjects}</span>
                  )}
                </div>

                <span className="text-xs text-subtitle/80">
                  {isLoading ? 'Loading projects...' : 'Total projects created'}
                </span>
              </div>
              <span className="flex justify-center items-center hover:rotate-12 hover:scale-125 hover:animate-spin shimmer-infinite transition-all size-14 bg-radial-back rounded-2xl">
                <FiBriefcase className="size-7 text-component" />
              </span>
            </div>
            <div className="flex items-center gap-x-2 bg-emerald-300/10 border border-emerald-200 rounded-xl px-2 py-2">
              <LuTrendingUp className="size-4 text-emerald-600" />
              {isLoading ? (
                <StatSkeleton width="w-12" />
              ) : (
                <span className="font-bold text-emerald-700">
                  {numberOfOpenProjects} open
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col dashboard-static-container overflow-hidden">
          <div className="px-1">
            <div className="w-full h-2 rounded-t-4xl bg-radial-back"></div>
          </div>
          <div className="w-full ring-border flex-1 flex flex-col gap-y-5 p-5 select-none">
            <div className="flex justify-between gap-x-2">
              <div className="flex flex-col gap-y-2">
                <span className="text-subtitle text-sm font-bold uppercase">
                  Total Budget
                </span>
                <div className="flex relative text-title text-2xl sm:text-3xl xl:text-2xl font-extrabold items-center gap-x-1">
                  <span>$</span>
                  <span>
                    {isLoading ? (
                      <StatSkeleton width="w-12" />
                    ) : (
                      <span>{toNumbersWithComma(totalBudget)}</span>
                    )}
                  </span>
                </div>
              </div>
              <span className="flex justify-center hover:rotate-12 hover:scale-125 hover:animate-spin shimmer-infinite transition-all items-center size-14 bg-radial-back rounded-2xl">
                <LuDollarSign className="size-7 text-component" />
              </span>
            </div>
            <span className="text-xs text-subtitle/80">Allocated funds</span>
          </div>
        </div>

        <div className="flex flex-col dashboard-static-container overflow-hidden">
          <div className="px-1">
            <div className="w-full h-2 rounded-t-4xl bg-radial-back"></div>
          </div>
          <div className="w-full ring-border flex-1 flex flex-col gap-y-5 p-5 select-none">
            <div className="flex justify-between gap-x-2">
              <div className="flex flex-col gap-y-2">
                <span className="text-subtitle text-sm font-bold uppercase">
                  Proposals
                </span>
                <div className="flex text-title text-2xl sm:text-3xl xl:text-5xl font-extrabold items-center gap-x-2">
                  <span>
                    <span>
                      {isLoading ? (
                        <StatSkeleton width="w-12" />
                      ) : (
                        <span>{numberOfProposals}</span>
                      )}
                    </span>
                  </span>
                </div>
                <span className="text-xs text-subtitle/80">
                  From freelancers
                </span>
              </div>
              <span className="flex justify-center hover:rotate-12 hover:scale-125 hover:animate-spin shimmer-infinite transition-all items-center size-14 bg-radial-back rounded-2xl">
                <LuFileText className="size-7 text-component" />
              </span>
            </div>
            <div className="flex items-center gap-x-2 bg-emerald-300/10 border border-emerald-200 rounded-xl px-2 py-2">
              <LuTrendingUp className="size-4 text-emerald-600" />
              <span className="font-bold text-emerald-700">Received</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col dashboard-static-container overflow-hidden">
          <div className="px-1">
            <div className="w-full h-2 rounded-t-4xl bg-radial-back"></div>
          </div>
          <div className="w-full ring-border flex-1 flex flex-col gap-y-5 p-5 select-none">
            <div className="flex justify-between gap-x-2">
              <div className="flex flex-col gap-y-2">
                <span className="text-subtitle text-sm font-bold uppercase">
                  Categories
                </span>
                <div className="flex text-title text-2xl sm:text-3xl xl:text-5xl font-extrabold items-center gap-x-2">
                  <span>
                    <span>
                      {isLoading ? (
                        <StatSkeleton width="w-12" />
                      ) : (
                        <span>{numberOfCategories}</span>
                      )}
                    </span>
                  </span>
                </div>
                <span className="text-xs text-subtitle/80">Available</span>
              </div>
              <span className="flex justify-center hover:rotate-12 hover:scale-125 hover:animate-spin shimmer-infinite transition-all items-center size-14 bg-radial-back rounded-2xl">
                <LuTarget className="size-7 text-component" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientStatics;
