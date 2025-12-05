import { FiBriefcase } from 'react-icons/fi';
import { GoTag } from 'react-icons/go';

function ProjectViewDetails({ project }) {
  return (
    <div className="flex flex-col orange-container-proposal overflow-hidden bg-component">
      <div className="w-full h-2 bg-radial-back"></div>
      <div className="w-full flex flex-col p-8 border-black shadow-xl">
        <div className="flex items-center gap-x-3">
          <span className="flex justify-center items-center size-12 bg-radial-back rounded-2xl">
            <FiBriefcase className="size-7 text-component" />
          </span>

          <span className="text-2xl font-bold">Project Details</span>
        </div>

        <div className="flex flex-col gap-y-8 mt-12">
          <div className="flex flex-col">
            <span className="text-sm uppercase text-subtitle font-bold tracking-wider mb-3">
              Description
            </span>
            <p className="text-lg text-subtitle font-semibold">
              {project.description}
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-sm uppercase text-subtitle font-bold tracking-wider mb-3">
              Skills Required
            </span>
            <p className="flex flex-wrap gap-2 items-start">
              {project.tags.map((tag, index) => (
                <span key={tag + index} className="badge-project-detail">
                  <GoTag />
                  {tag}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectViewDetails;
