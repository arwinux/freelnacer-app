import { LuFileText, LuUsers } from 'react-icons/lu';
import { FiBriefcase } from 'react-icons/fi';
import { IoMdArrowForward, IoMdTrendingUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import useAllProjects from '../projects/useAllProjects';
import StatSkeleton from '../../ui/StaticSkeleton';
import useUser from '../authentication/useUser';

function AdminQuickAction({
  proposals,
  proposalsIsLoading,
  projects,
  projectsIsLoading,
}) {
  const numberOfAllProjects = projectsIsLoading ? null : projects?.length;

  const { isLoading: userProfileIsLoading, user } = useUser();

  const userId = userProfileIsLoading ? null : user._id;
  const userProposals = proposalsIsLoading
    ? null
    : proposals.filter((p) => p.user === userId);

  const numberOfProposals = proposalsIsLoading ? null : userProposals.length;

  return (
    <div className='px-6 my-10'>
      <div className='flex flex-col lg:max-w-7xl mx-auto'>
        <div className='flex gap-x-3 mb-10 items-center'>
          <div className='h-8 w-1 bg-primary-500 rounded-full'></div>
          <p className='font-bold text-3xl text-title'>Quick Actions</p>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 grid-flow-row gap-x-8 gap-y-5 lg:max-w-7xl mx-auto'>
          <Link
            to={'/admin/projects'}
            className='w-full ring-border flex flex-1 flex-col group justify-between gap-x-2 gap-y-5 p-8 cursor-pointer select-none dashboard-static-container'
          >
            <div className='flex flex-col gap-y-2'>
              <div className='flex justify-between mb-3'>
                <span className='flex justify-center items-center group-hover:scale-110 transition-all duration-300 size-14 bg-radial-back rounded-2xl'>
                  <FiBriefcase className='size-7 text-component' />
                </span>
                <IoMdTrendingUp className='opacity-0 group-hover:opacity-100 transition-opacity size-6 text-primary-500' />
              </div>

              <span className='font-bold text-xl text-title'>All Project</span>

              <span className=' text-subtitle/80'>
                <span>
                  {projectsIsLoading ? (
                    <StatSkeleton width='w-12' />
                  ) : (
                    <span>
                      {numberOfAllProjects} projects available to explore
                    </span>
                  )}
                </span>
              </span>
            </div>
            <div className='flex items-center gap-x-2 group-hover:translate-x-2 transition-all duration-500 text-primary-500'>
              <span className='font-semibold'>View All</span>
              <IoMdArrowForward />
            </div>
          </Link>

          <Link
            to={'/admin/admin-proposals'}
            className='w-full ring-border flex flex-1 flex-col group justify-between gap-x-2 gap-y-5 p-8 cursor-pointer select-none dashboard-static-container'
          >
            <div className='flex flex-col gap-y-2'>
              <div className='flex justify-between mb-3'>
                <span className='flex justify-center items-center group-hover:scale-110 transition-all duration-300 size-14 bg-radial-back rounded-2xl'>
                  <LuFileText className='size-7 text-component' />
                </span>
                <IoMdTrendingUp className='opacity-0 group-hover:opacity-100 transition-opacity size-6 text-primary-500' />
              </div>

              <span className='font-bold text-xl text-title'>My Proposals</span>

              <span className=' text-subtitle/80'>
                <span>
                  {proposalsIsLoading ? (
                    <StatSkeleton width='w-12' />
                  ) : (
                    <span>{numberOfProposals} items to manage</span>
                  )}
                </span>
              </span>
            </div>
            <div className='flex items-center gap-x-2 group-hover:translate-x-2 transition-all duration-500 text-primary-500'>
              <span className='font-semibold'>View All</span>
              <IoMdArrowForward />
            </div>
          </Link>

          <Link
            to='/admin/profile'
            className='w-full ring-border flex flex-1 flex-col group justify-between gap-x-2 gap-y-5 p-8 cursor-pointer select-none dashboard-static-container'
          >
            <div className='flex flex-col gap-y-2'>
              <div className='flex justify-between mb-3'>
                <span className='flex justify-center items-center group-hover:scale-110 transition-all duration-300 size-14 bg-radial-back rounded-2xl'>
                  <LuUsers className='size-7 text-component' />
                </span>
                <IoMdTrendingUp className='opacity-0 group-hover:opacity-100 transition-opacity size-6 text-primary-500' />
              </div>

              <span className='font-bold text-xl text-title'>My Profile</span>

              <span className=' text-subtitle/80'>
                Manage your account settings
              </span>
            </div>
            <div className='flex items-center gap-x-2 group-hover:translate-x-2 transition-all duration-300 text-primary-500'>
              <span className='font-semibold'>Open Profile </span>
              <IoMdArrowForward />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminQuickAction;
