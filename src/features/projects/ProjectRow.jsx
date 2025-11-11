import { LuDollarSign } from 'react-icons/lu';

import { FaDollarSign, FaRegFolderOpen } from 'react-icons/fa';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { GoTag } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { TiPencil } from 'react-icons/ti';

function ProjectRow({
  title,
  status,
  description,
  category,
  budget,
  deadline,
  tags,
  client,
}) {
  return (
    <tr className="flex bg-white justify-between items-center whitespace-nowrap rounded-l-xl border-l-4 hover:border-l-8 w-full transition-all shadow-md hover:shadow-xl border-l-primary-500">
      <th className="flex justify-center items-start gap-x-4 py-4 max-w-md">
        <span className="size-14 p-6 ml-4 text-xl rounded-xl flex justify-center items-center text-white bg-radial-back">
          {title[0]}
        </span>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col">
            <p className="text-lg text-black">{title}</p>
            <p className="text-wrap text-sm text-zinc-500 font-medium">
              {description}
            </p>
          </div>
          <div className="flex justify-start items-center gap-x-4">
            <span
              className={`flex justify-center items-center border-2 font-bold text-xs px-2.5 py-0.5 rounded-full ${
                status === 'OPEN'
                  ? 'bg-green-100 border-green-400 text-green-700'
                  : 'bg-red-100 border-red-400 text-red-700'
              }  `}
            >
              {status}
            </span>
            <div className="flex w-fit justify-center items-center text-xs gap-x-2 rounded-xl px-2.5 py-0.5 font-medium text-primary-700 bg-primary-100 border-2 border-primary-300">
              <FaRegFolderOpen />
              <p>{category}</p>
            </div>

            <p className="flex gap-x-1 text-zinc-500 text-xs font-medium justify-center items-center">
              <FiUser className="size-4" />
              {client}
            </p>
          </div>
        </div>
      </th>

      <th className="py-4 px-3">
        <div className="flex gap-2 flex-wrap truncate max-w-[250px]">
          {tags.map((tag, index) => (
            <span
              key={tag + index}
              className="flex justify-center items-center gap-x-1 text-primary-700 font-semibold text-xs px-2 py-1 bg-primary-100 border border-primary-500/50 rounded-xl"
            >
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
            <div className="flex text-green-800 justify-center items-center -translate-x-1">
              <FaDollarSign className="size-4" />
              <span className="font-bold text-green-700">{budget}</span>
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

      <th className="flex justify-center items-center gap-x-4 py-4 px-3">
        <button className="py-2 px-2 text-white flex gap-x-4 justify-center bg-radial-back rounded-lg items-center">
          <IoEyeOutline className="size-5" />
          View
          <MdKeyboardArrowRight />
        </button>
        <div className="flex gap-x-2">
          <button className="size-9 flex justify-center border-2 border-blue-500 rounded-lg items-center">
            <TiPencil className="text-blue-500 size-5" />
          </button>
          <button className="size-9 flex justify-center border-2 border-red-500 rounded-lg items-center">
            <RiDeleteBin6Line className="text-red-500 size-5" />
          </button>
        </div>
      </th>
    </tr>
  );
}

export default ProjectRow;
