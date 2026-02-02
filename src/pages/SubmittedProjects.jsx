import React, { useState } from 'react';
import PageHeader from '../ui/PageHeader';
import LoadingPage from '../ui/LoadingPage';
import useAllProjects from '../features/projects/useAllProjects';
import FilterProjects from '../ui/FilterProjects';
import AnimatedListItem from '../ui/FrameMotion';
import { AnimatePresence } from 'framer-motion';
import ProjectRow from '../features/projects/ProjectRow';
import filteredProjects from '../utils/filterProjectsByStatus';
import projectCounts from '../utils/projectCounts';
import toNumbersWithComma from '../utils/toNumbersWithComma';
import toDateShort from '../utils/toDateShort';

function SubmittedProjects() {
  const [status, setStatus] = useState('allproject');
  const { projects, isLoading } = useAllProjects();
  console.log(projects);

  if (isLoading) return <LoadingPage />;
  return (
    <div className='flex flex-col mt-12 page-set'>
      <PageHeader
        badge='Browse All Projects'
        title='All Projects'
        description={'View and manage all platform projects'}
        color='blue'
      />

      <FilterProjects
        status={status}
        setStatus={setStatus}
        counts={projectCounts(projects)}
      />

      <div className='overflow-x-auto'>
        <table className='w-full border-collapse border-spacing-0 rounded-md overflow-hidden text-left whitespace-nowrap'>
          <tbody className='flex flex-col gap-y-4'>
            <AnimatePresence mode='sync'>
              {filteredProjects(projects, status).map((project) => (
                <AnimatedListItem key={project._id}>
                  <ProjectRow
                    id={project._id}
                    title={project.title}
                    status={project.status}
                    description={project.description}
                    category={project.category.title}
                    budget={toNumbersWithComma(project.budget)}
                    deadline={toDateShort(project.deadline)}
                    tags={project.tags}
                    client={project.freelancer?.name || '-'}
                  />
                </AnimatedListItem>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SubmittedProjects;
