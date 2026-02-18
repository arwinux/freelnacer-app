import { LuSparkles } from 'react-icons/lu';

import { useState } from 'react';
import useAllProjects from './useAllProjects';
import LoadingPage from '../../ui/LoadingPage';
import ProjectRow from './ProjectRow';
import toDateShort from '../../utils/toDateShort';
import toNumbersWithComma from '../../utils/toNumbersWithComma';
import filteredProjects from '../../utils/filterProjectsByStatus';
import { AnimatePresence } from 'framer-motion';
import AnimatedListItem from '../../ui/FrameMotion';
import FilterProjects from '../../ui/FilterProjects';
import PageHeader from '../../ui/PageHeader';
import projectCounts from '../../utils/projectCounts';

function ProjectsViewTable() {
  const { projects = [], isLoading } = useAllProjects();
  const counts = projectCounts(projects);

  return (
    <div className='flex flex-col mt-12 page-set'>
      <PageHeader
        badge='Browse All Projects'
        title='All Projects'
        description='View and manage all platform projects'
        color='blue'
      />

      <FilterProjects counts={counts} />

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

export default ProjectsViewTable;
