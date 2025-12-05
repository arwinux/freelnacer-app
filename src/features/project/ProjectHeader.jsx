import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';
import { LuCircleCheckBig } from 'react-icons/lu';
import useNavigateBack from '../../hooks/useNavigateBack';

function ProjectHeader({ project }) {
  const navigateBack = useNavigateBack();

  return (
    <div className="w-full py-20 px-6 bg-radial-back opacity-90">
      <div className="flex flex-col justify-center lg:max-w-6xl mx-auto">
        <button
          onClick={navigateBack}
          className="inline-flex self-start items-center gap-x-4 transition-all duration-400 hover:bg-component/20 rounded-lg font-bold text-sm text-color px-4 py-3 mb-8"
        >
          <FaArrowLeft className="size-3" />
          <span>Back to Projects</span>
        </button>

        <div className="flex flex-col gap-y-7">
          <div className="flex gap-x-3">
            <div
              className={`flex justify-center items-center gap-x-2 text-color text-sm font-bold ${
                project?.status === 'OPEN' ? 'bg-emerald-500' : 'bg-red-500'
              } px-4 py-2 rounded-full shadow-xl`}
            >
              <LuCircleCheckBig className="size-4" />
              <span className="">{project?.status}</span>
            </div>

            <div className="flex justify-center items-center gap-x-2 text-sm font-bold backdrop-blur-xl badge-glass px-4 py-2 rounded-full shadow-xl">
              <FiTarget className="size-4" />
              <span className="">{project?.category.title}</span>
            </div>
          </div>

          <div className="h-30 flex flex-col justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl w-full sm:max-w-4xl font-bold text-color/90 text-shadow">
              {project?.title}
            </p>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="flex justify-center items-center size-12 text-xl rounded-xl font-bold backdrop-blur-xl badge-glass">
              <span>{project.freelancer?.name[0] || '-'}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-color/70 text-sm">Posted by</span>
              <p className="text-color font-bold">
                {project.freelancer?.name || '-'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
