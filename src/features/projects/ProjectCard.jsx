import { GoTag } from 'react-icons/go';
import { FiCalendar } from 'react-icons/fi';
import { LuCircleCheckBig, LuDollarSign } from 'react-icons/lu';
import { FaDollarSign, FaRegFolderOpen } from 'react-icons/fa';
import { FaUserLarge } from 'react-icons/fa6';
import { TiPencil } from 'react-icons/ti';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from 'react';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import useRemoveProject from './useRemoveProject';
import useNavigateCreateProject from '../../hooks/useNavigateCreateProject';
import Toggle from '../../ui/Toggle';
import ToggleProjectStatus from './ToggleProjectStatus';

function ProjectCard({
  projectAll,
  id,
  number,
  title,
  status,
  description,
  category,
  budget,
  deadline,
  tags,
  client,
}) {
  const [isDeletedOpen, setIsDeletedOpen] = useState(false);
  const { removeProject } = useRemoveProject();
  const navigateCreateProject = useNavigateCreateProject();
  const [localStatus, setLocalStatus] = useState(status);

  return (
    <div className="flex flex-col ">
      <article className="text-title flex flex-col bg-component orange-container">
        <div className="h-3">
          <div className="w-full h-2 rounded-t-4xl bg-radial-back"></div>
        </div>
        <div className="flex flex-col justify-between gap-y-4  rounded-t-none p-5">
          <div className="project-card__header gap-4 w-full flex justify-between items-center">
            <div className="flex justify-center items-center gap-x-4 ">
              <span className="px-2 rounded-full flex justify-center items-center text-primary-700 bg-primary-100 border border-primary-500/50">
                {number}
              </span>
              <span className="text-base font-bold line-clamp-1">
                {title}
              </span>
            </div>

            <div className="flex justify-center items-center gap-x-4">
              <span
                className={`flex justify-center items-center border-2 font-bold text-xs px-2 py-1 rounded-full ${
                  localStatus === 'OPEN'
                    ? 'bg-green-100 border-green-500/50 text-green-700'
                    : 'bg-red-100 border-red-500/50 text-red-700'
                }  `}
              >
                {localStatus}
              </span>
            </div>
          </div>

          <div className="flex flex-col mt-6 justify-center gap-y-6">
            <div className="flex w-fit justify-center items-center text-sm border border-zinc-600/30 gap-x-2 rounded-xl bg-zinc-200/80 px-3 font-medium text-zinc-600">
              <FaRegFolderOpen />
              <p>{category}</p>
            </div>
            <p className="text-subtitle font-medium line-clamp-2 text-sm">
              {description}
            </p>

            <div className="flex gap-2 h-16 truncate flex-wrap items-start">
              {tags.map((tag, index) => (
                <span key={tag + index} className="badge-tag">
                  <GoTag />
                  {tag}
                </span>
              ))}
            </div>

            <div className="w-full h-px bg-zinc-200"></div>

            <div className="flex justify-between flex-wrap gap-y-3">
              <div className="flex gap-x-2 flex-1">
                <span className="flex justify-center items-center size-11 rounded-xl shadow-md bg-green-100">
                  <LuDollarSign className="size-5 text-green-600" />
                </span>
                <div className="flex flex-col">
                  <p className="font-bold text-sm">BUDGET</p>
                  <div className="flex justify-center items-center -translate-x-1">
                    <FaDollarSign className="size-4" />
                    <span className="font-bold">{budget}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-x-2 flex-1">
                <span className="flex justify-center items-center size-11 rounded-xl shadow-md bg-blue-100">
                  <FiCalendar className="size-5 text-blue-700" />
                </span>
                <div className="flex flex-col">
                  <p className="font-bold text-sm">DEADLINE</p>
                  <div className="flex justify-center items-center">
                    <span className="font-bold">{deadline}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-zinc-200"></div>

            <div className="flex gap-x-3 items-center">
              <div className="bg-primary-500 text-color p-3 rounded-full">
                <FaUserLarge className="size-4" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-subtitle">Posted by</p>
                <p className="text-sm font-bold">{client}</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-2">
              <button className="primary-btn py-2 font-bold">
                View Full Details
              </button>
              <div className="flex gap-x-2">
                <button
                  onClick={() =>
                    navigateCreateProject({ projctToEdit: projectAll })
                  }
                  className="size-9 flex justify-center border-2 border-blue-500 rounded-lg items-center"
                >
                  <TiPencil className="text-blue-500 size-5" />
                </button>

                <button
                  onClick={() => setIsDeletedOpen(true)}
                  className="size-9 flex justify-center border-2 border-red-500 rounded-lg items-center"
                >
                  <RiDeleteBin6Line className="text-red-500 size-5" />
                </button>
                <Modal
                  open={isDeletedOpen}
                  onClose={() => setIsDeletedOpen(false)}
                  title={
                    <div className="flex items-center gap-x-2">
                      <div className="flex items-center gap-x-2">
                        <div className="size-6 flex justify-center bg-title rounded-lg items-center">
                          <TiPencil className="text-component size-4" />
                        </div>
                        <p className="text-xl">Delete</p>
                      </div>
                      <p className="text-md truncate text-red-600 mr-2">
                        "{title}"
                      </p>
                    </div>
                  }
                >
                  <ConfirmDelete
                    resourceName={title}
                    onClose={() => setIsDeletedOpen(false)}
                    onConfirm={() =>
                      removeProject(id, {
                        onSuccess: () => setIsDeletedOpen(false),
                      })
                    }
                    disabled={false}
                  />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </article>

      <ToggleProjectStatus
        project={projectAll}
        onStatusChange={(newStatus) => setLocalStatus(newStatus)}
      />
    </div>
  );
}

export default ProjectCard;
