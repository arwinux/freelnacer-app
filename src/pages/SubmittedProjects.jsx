import React, { useState } from 'react';
import PageHeader from '../ui/PageHeader';
import LoadingPage from '../ui/LoadingPage';
import useAllProjects from '../features/projects/useAllProjects';
import FilterProjects from '../ui/FilterProjects';
import AnimatedListItem from '../ui/FrameMotion';
import { AnimatePresence } from 'framer-motion';
import ProjectRow from '../features/projects/ProjectRow';
import projectCounts from '../utils/projectCounts';
import toNumbersWithComma from '../utils/toNumbersWithComma';
import toDateShort from '../utils/toDateShort';
import useClientProjectsCounts from '../features/projects/useClientProjectsCounts';
import useAllProjectsCounts from '../features/projects/useAllProjectsCounts';

function SubmittedProjects() {
  const { projects = [], isLoading } = useAllProjects();
  const { projectsCounts, isLoading: isLoadingCount } = useAllProjectsCounts();

  return (
    <div className='flex flex-col mt-12 page-set'>
      <PageHeader
        badge='Browse All Projects'
        title='All Projects'
        description='View and manage all platform projects'
        color='blue'
      />

      <FilterProjects counts={isLoadingCount ? '...' : projectsCounts} />

      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className='overflow-x-auto w-full mt-4'>
          <div className='flex flex-col gap-y-4 w-full'>
            <AnimatePresence mode='sync'>
              {projects.map((project) => (
                <AnimatedListItem key={project._id}>
                  <ProjectRow
                    id={project._id}
                    title={project.title}
                    status={project.status}
                    description={project.description}
                    category={project.category?.title}
                    budget={toNumbersWithComma(project.budget)}
                    deadline={toDateShort(project.deadline)}
                    tags={project.tags}
                    client={project.freelancer?.name || '-'}
                  />
                </AnimatedListItem>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubmittedProjects;
