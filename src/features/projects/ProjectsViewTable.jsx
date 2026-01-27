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
  const [status, setStatus] = useState('allproject');
  const { projects, isLoading } = useAllProjects();
  console.log(projects);

  if (isLoading) return <LoadingPage />;
  return (
    <div className="flex flex-col">
      <PageHeader
        badge="Browse All Projects"
        title="All Projects"
        description={'View and manage all platform projects'}
        color="blue"
      />

      <FilterProjects status={status} setStatus={setStatus} counts={projectCounts(projects)}/>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border-spacing-0 rounded-md overflow-hidden text-left whitespace-nowrap">
          <tbody className="flex flex-col gap-y-4">
            <AnimatePresence mode="sync">
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

export default ProjectsViewTable;
