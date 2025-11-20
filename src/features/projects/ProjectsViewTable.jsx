import ProjectCard from './ProjectCard';

import {
  LuCircleCheckBig,
  LuLayers3,
  LuLock,
  LuSparkles,
} from 'react-icons/lu';

import { useState } from 'react';
import useAllProjects from './useAllProjects';
import LoadingPage from '../../ui/LoadingPage';
import ProjectRow from './ProjectRow';
import toDateShort from '../../utils/toDateShort';
import toNumbersWithComma from '../../utils/toNumbersWithComma';

function ProjectsViewTable() {
  const [status, setStatus] = useState('allproject');
  const { projects, isLoading } = useAllProjects();

  if (isLoading) return <LoadingPage />;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-5 gap-3 w-full justify-center items-center">
        <div className="flex justify-center items-center gap-x-1 text-primary-700 font-semibold text-md px-2 py-1 bg-primary-100 border border-primary-500/50 rounded-xl">
          <LuSparkles />
          <span>Browse All Projects</span>
        </div>
        <p className="text-title font-bold text-3xl sm:text-5xl mb-2">All Projects</p>
        <span className="text-subtitle font-medium">
          View and manage all platform projects
        </span>
      </div>
      <div>
        <ul className="flex flex-col sm:flex-row flex-wrap gap-5 p-4 rounded-xl items-center justify-center bg-component text-title shadow-md shadow-zinc-400/40 mb-7 transition-all duration-500">
          <button
            onClick={() => setStatus('allproject')}
            className={`flex-1 text-xl flex justify-center items-center gap-x-2 py-4 font-semibold w-full ${
              status === 'allproject'
                ? 'rounded-xl bg-linear-to-r from-blue-500 to-purple-600 text-color'
                : 'bg-transparent rounded-xl'
            }`}
          >
            <LuLayers3 />
            <p>All Projects</p>
          </button>

          <button
            onClick={() => setStatus('open')}
            className={`flex-1 text-xl flex justify-center items-center gap-x-2 py-4 font-semibold w-full ${
              status === 'open'
                ? 'rounded-xl bg-linear-to-r from-green-500 to-teal-600 text-color'
                : 'bg-transparent rounded-xl'
            }`}
          >
            <LuCircleCheckBig />
            <p>Open</p>
          </button>

          <button
            onClick={() => setStatus('closed')}
            className={`flex-1 text-xl flex justify-center items-center gap-x-2 py-4 font-semibold w-full ${
              status === 'closed'
                ? 'rounded-xl bg-linear-to-r from-red-500 to-primary-500 text-color'
                : 'bg-transparent rounded-xl'
            }`}
          >
            <LuLock />
            <p>Closed</p>
          </button>
        </ul>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border-spacing-0 rounded-md overflow-hidden text-left whitespace-nowrap">
          <tbody className="flex flex-col gap-y-4">
            {projects.map((project) => (
              <ProjectRow
                key={project._id}
                title={project.title}
                status={project.status}
                description={project.description}
                category={project.category.title}
                budget={toNumbersWithComma(project.budget)}
                deadline={toDateShort(project.deadline)}
                tags={project.tags}
                client={project.freelancer?.name || '-'}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectsViewTable;
