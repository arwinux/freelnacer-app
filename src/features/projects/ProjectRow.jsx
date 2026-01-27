import { LuDollarSign } from 'react-icons/lu';

import { FaDollarSign, FaRegFolderOpen } from 'react-icons/fa';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { GoTag } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import truncateText from '../../utils/truncateText';
import { Link } from 'react-router-dom';

function ProjectRow({
  id,
  title,
  status,
  description,
  category,
  budget,
  deadline,
  tags,
}) {
  return (
    <tr className="flex bg-component justify-between items-center whitespace-nowrap rounded-xl border-l-4 hover:border-l-8 w-full transition-all shadow-md hover:shadow-xl border-l-primary-500">
      <th className="flex justify-center items-start gap-x-4 py-4 max-w-md">
        <span className="size-16 p-8 ml-4 text-xl rounded-xl flex justify-center items-center text-color bg-radial-back">
          {title[0]}
        </span>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col">
            <p className="text-lg text-title">{truncateText(title, 30)}</p>
            <p className="text-wrap text-sm text-subtitle font-medium">
              {truncateText(description, 100)}
            </p>
          </div>
          <div className="flex justify-start items-center gap-x-4">
            <span
              className={`badge-state ${
                status === 'OPEN' ? 'badge-success' : 'badge-danger'
              }  `}
            >
              {status}
            </span>
            <div className="flex w-fit justify-center items-center text-xs gap-x-2 rounded-xl px-2.5 py-0.5 font-medium text-primary-700 bg-primary-100 border-2 border-primary-300">
              <FaRegFolderOpen />
              <p>{category}</p>
            </div>
          </div>
        </div>
      </th>

      <th className="py-4 px-3">
        <div className="flex gap-2 flex-wrap truncate w-[250px]">
          {tags.map((tag, index) => (
            <span key={tag + index} className="badge-tag">
              <GoTag />
              {tag}
            </span>
          ))}
        </div>
      </th>

      <th className="flex justify-center items-center gap-x-2 py-4 px-3">
        <div className="flex gap-x-2 flex-1 justify-center items-center bg-green-100 border border-green-300 p-3 rounded-md">
          <span className="flex justify-center items-center size-8 rounded-xl">
            <LuDollarSign className="size-5 text-green-700" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-sm text-green-700">BUDGET</p>
            <div className="flex items-center text-green-800 justify-center -translate-x-1">
              <FaDollarSign className="size-4" />
              <span className="font-bold text-green-700 text-left min-w-[60px]">
                {budget}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-x-2 flex-1 justify-center items-center bg-blue-100 border border-blue-300 p-3 rounded-md">
          <span className="flex justify-center items-center size-8 rounded-xl">
            <FiCalendar className="size-5 text-blue-700" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-sm text-blue-700">DEADLINE</p>
            <div className="flex text-blue-800 justify-center items-center">
              <span className="font-bold text-blue-700">{deadline}</span>
            </div>
          </div>
        </div>
      </th>

      <th className="flex justify-center items-center gap-x-4 py-4 px-6">
        <Link
          to={id}
          state={{ canChangeStatus: false }}
          className="py-2 px-2 text-color flex gap-x-4 justify-center bg-radial-back rounded-lg items-center"
        >
          <IoEyeOutline className="size-5" />
          View
          <MdKeyboardArrowRight />
        </Link>
      </th>
    </tr>
  );
}

export default ProjectRow;
