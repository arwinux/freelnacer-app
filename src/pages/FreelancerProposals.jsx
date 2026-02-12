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

      {/* <div className='grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-4 gap-x-8 gap-y-12'>
        <AnimatePresence mode='sync'>
          {filteredProjects(projects, status).map((project, index) => (
            <AnimatedListItem key={project._id}>
              <ProjectCard
                projectAll={project}
                key={project._id}
                id={project._id}
                number={index + 1}
                title={truncateText(project.title, 60)}
                status={project.status}
                description={truncateText(project.description, 100)}
                category={project.category.title}
                budget={toNumbersWithComma(project.budget)}
                deadline={toDateShort(project.deadline)}
                tags={project.tags}
                client={project.owner?.name || '-'}
              />
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div> */}
    </div>
  );
}

export default FreelancerProposals;
