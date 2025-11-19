import useClientProjects from './useClientProjects';
import ProjectCard from './ProjectCard';
import { LuCircleCheckBig, LuLayers3, LuLock } from 'react-icons/lu';
import { useState } from 'react';
import Empty from '../../ui/Empty';
import { PiPlusCircleBold } from 'react-icons/pi';
import LoadingPage from '../../ui/LoadingPage';
import toDateShort from '../../utils/toDateShort';
import toNumbersWithComma from '../../utils/toNumbersWithComma';
import truncateText from '../../utils/truncateText';

function ProjectsViewGrid() {
  const { projects, isLoading } = useClientProjects();
  const [status, setStatus] = useState('allproject');

  if (isLoading) return <LoadingPage />;
  if (!projects.length)
    return (
      <Empty
        resourceName="Projects"
        iconbtn={<PiPlusCircleBold />}
        textbtn="Create your first Project"
      />
    );

  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-5">
        <p className="text-title font-bold text-4xl mb-2">My Projects</p>
        <span className="text-subtitle font-medium">
          Manage and track your projects
        </span>
      </div>
      <div className="">
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
      <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={project._id}
            id={project._id}
            number={index + 1}
            title={project.title}
            status={project.status}
            description={truncateText(project.description, 100)}
            category={project.category.title}
            budget={toNumbersWithComma(project.budget)}
            deadline={toDateShort(project.deadline)}
            tags={project.tags}
            client={project.freelancer?.name || '-'}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsViewGrid;
