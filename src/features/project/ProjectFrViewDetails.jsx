import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { GoTag } from 'react-icons/go';
import { LuDollarSign } from 'react-icons/lu';
import { useState, useCallback } from 'react';
import toast from 'react-hot-toast';

import toNumbersWithComma from '../../utils/toNumbersWithComma';
import toDateShort from '../../utils/toDateShort';

function ProjectFrViewDetails({ project }) {
  const [copied, setCopied] = useState(false);

  const handleCopyProjectId = useCallback(async () => {
    if (!project?._id) return;

    // Block copying if project is CLOSED
    if (project.status === 'CLOSED') {
      toast.error('Cannot copy ID: This project is closed.');
      return;
    }

    try {
      await navigator.clipboard.writeText(project._id);
      setCopied(true);
      toast.success('Project ID copied');
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error('Failed to copy');
    }
  }, [project?._id, project?.status]);

  if (!project) return null;

  return (
    <div className='flex flex-col orange-container-proposal overflow-hidden bg-component shadow-lg shadow-title-400/45'>
      {/* Top Accent */}
      <div className='w-full h-2 bg-radial-back' />

      <div className='w-full flex flex-col p-8 shadow-xl'>
        {/* Header */}
        <div className='flex items-center gap-x-3 gap-y-3 flex-wrap'>
          <FiBriefcase className='size-6 text-primary-500 shrink-0' />

          {/* Status */}
          <span
            className={`badge-state ${
              project?.status === 'OPEN' ? 'badge-success' : 'badge-danger'
            }`}
          >
            {project?.status || 'UNKNOWN'}
          </span>

          {/* Copy ID */}
          <button
            onClick={handleCopyProjectId}
            aria-label='Copy project id'
            title='Copy project id'
            className={`
              rounded-xl px-2 font-mono font-bold tracking-wider border-2
              transition-all duration-300
              ${
                copied
                  ? 'bg-green-500 border-green-500 text-white'
                  : 'border-gray-500 text-gray-700 hover:bg-gray-600 hover:text-component'
              }
            `}
          >
            {project?._id || '—'}
          </button>
        </div>

        {/* Title */}
        <div className='mt-6'>
          <p className='text-2xl sm:text-3xl md:text-4xl w-full sm:max-w-4xl font-bold text-title text-shadow'>
            {project?.title || 'Untitled Project'}
          </p>
        </div>

        {/* Description + Skills */}
        <div className='flex flex-col gap-y-8 mt-4'>
          <p className='text-lg text-subtitle font-semibold'>
            {project?.description || 'No description provided'}
          </p>

          {/* Tags */}
          <div>
            <span className='text-sm uppercase text-subtitle font-bold tracking-wider mb-3 block'>
              Skills Required
            </span>

            <div className='flex flex-wrap gap-2'>
              {project?.tags?.length ? (
                project.tags.map((tag, index) => (
                  <span
                    key={`${tag}-${index}`}
                    className='badge-projectfr-detail flex items-center gap-1'
                  >
                    <GoTag />
                    {tag}
                  </span>
                ))
              ) : (
                <span className='text-subtitle text-sm'>No skills listed</span>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='h-0.5 bg-gray-300 my-6' />

        {/* Info Grid */}
        <div className='grid xl:grid-cols-3 gap-4'>
          {/* Budget */}
          <InfoCard
            icon={<LuDollarSign className='size-8 text-green-800' />}
            label='Budget'
            value={
              project?.budget ? `$${toNumbersWithComma(project.budget)}` : '—'
            }
            bg='from-greenfull/30 via-greenfull/40 to-greenfull'
          />

          {/* Deadline */}
          <InfoCard
            icon={<FiCalendar className='size-8 text-blue-800' />}
            label='Deadline'
            value={project?.deadline ? toDateShort(project.deadline) : '—'}
            bg='from-bluefull/30 via-bluefull/40 to-bluefull'
          />

          {/* Owner */}
          <InfoCard
            icon={<FiBriefcase className='size-8 text-primary-800' />}
            label='Posted By'
            value={project?.owner?.name || 'Unknown'}
            bg='from-orangefull/30 via-orangefull/40 to-orangefull'
          />
        </div>
      </div>
    </div>
  );
}

/* ================= Sub Component ================= */

function InfoCard({ icon, label, value, bg }) {
  return (
    <div
      className={`
        flex gap-x-4 items-center p-4
        hover:scale-105 select-none
        transition-all duration-300 rounded-xl
        bg-linear-to-br ${bg}
      `}
    >
      {icon}

      <div className='flex flex-col'>
        <span className='uppercase text-sm font-bold text-title/80'>
          {label}
        </span>

        <p className='lg:text-xl 2xl:text-2xl font-bold text-title'>{value}</p>
      </div>
    </div>
  );
}

export default ProjectFrViewDetails;
