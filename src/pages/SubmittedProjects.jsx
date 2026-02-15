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
import { useSearchParams } from 'react-router-dom';
import { filterProjectsByCategory } from '../utils/filterProjectsByCategory';

function SubmittedProjects() {
  const [status, setStatus] = useState('All_Project');
  const { projects = [], isLoading } = useAllProjects();
  const [searchParams] = useSearchParams();
  const urlCategory = searchParams.get('category') || 'All';

  // Filter projects by category only
  const projectsByCategory = filterProjectsByCategory(projects, urlCategory);

  // Calculate counts for tabs BEFORE filtering by status
  const counts = projectCounts(projectsByCategory);

  // Then filter by status for display
  const finalProjects = filteredProjects(projectsByCategory, status);

  if (isLoading) return <LoadingPage />;

  return (
    <div className="flex flex-col mt-12 page-set">
      <PageHeader
        badge="Browse All Projects"
        title="All Projects"
        description="View and manage all platform projects"
        color="blue"
      />

      <FilterProjects
        status={status}
        setStatus={setStatus}
        counts={counts} // counts now correct for all tabs
      />

      <div className="overflow-x-auto w-full mt-4">
        <div className="flex flex-col gap-y-4 w-full">
          <AnimatePresence mode="sync">
            {finalProjects.map((project) => (
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
    </div>
  );
}


export default SubmittedProjects;
