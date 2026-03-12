import { LuFolderOpen } from 'react-icons/lu';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import useRemoveCategory from '../features/categories/useRemoveCategory';
import ConfirmDelete from './ConfirmDelete';
import { useState } from 'react';
import { TiPencil } from 'react-icons/ti';
import Modal from './Modal';
import { Link } from 'react-router-dom';

function Category({
  value,
  index,
  title,
  titleEnglish,
  type,
  description,
  categoryValue,
  setcategoryValue,
  editCategoryValues,
}) {
  const { removeCategory } = useRemoveCategory();
  const [isDeletedOpen, setIsDeletedOpen] = useState(false);

  const onChange = () => {
    setcategoryValue(value);
    editCategoryValues = {
      title,
      englishTitle: titleEnglish,
      type,
      description,
    };
    console.log(type)
  };

  return (
    <div className='group flex flex-col gap-y-2 overflow-hidden justify-start hover:scale-105 transition-all duration-300 cursor-default select-none bg-component shadow-lg shadow-zinc-500/40 rounded-xl'>
      <div
        className={`${getRandomGradient(index)} relative py-6 flex justify-center items-center`}
      >
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
          className='group-hover:flex hidden absolute right-0 top-0 p-3 justify-center items-center gap-x-2'
        >
          <div className='flex gap-x-2'>
            <Link
              to={`/admin/manage-categories/${value}`}
              state={{ canChangeStatus: false }}
              onClick={() => onChange()}
              className='size-9 flex justify-center bg-component rounded-lg items-center'
            >
              <TiPencil className='text-title size-5' />
            </Link>

            <button
              onClick={() => setIsDeletedOpen(true)}
              className='size-9 flex justify-center bg-red-500 text-white rounded-lg items-center'
            >
              <RiDeleteBin6Line className='text-white size-5' />
            </button>
            <Modal
              open={isDeletedOpen}
              onClose={() => setIsDeletedOpen(false)}
              title={
                <div className='flex items-center gap-x-2'>
                  <div className='flex items-center gap-x-2'>
                    <div className='size-6 flex justify-center bg-title rounded-lg items-center'>
                      <TiPencil className='text-component size-4' />
                    </div>
                    <p className='text-xl'>Delete</p>
                  </div>
                  <p className='text-md truncate text-red-600 mr-2'>{title}</p>
                </div>
              }
            >
              <ConfirmDelete
                resourceName={title}
                onClose={() => setIsDeletedOpen(false)}
                onConfirm={() =>
                  removeCategory(value, {
                    onSuccess: () => setIsDeletedOpen(false),
                  })
                }
                disabled={false}
              />
            </Modal>
          </div>
        </div>
        <LuFolderOpen className='size-14 text-component' />
      </div>
      <div className='p-4 flex flex-col justify-center gap-y-2'>
        <p className='text-xl font-bold'>{title}</p>
        <p className='flex w-fit text-base! justify-center items-center badge-category'>
          {titleEnglish}
        </p>
        <p className='text-subtitle'>{description}</p>
      </div>
    </div>
  );
}

export default Category;

function getRandomGradient(index) {
  index = index >= 10 ? index.toString()[1] : index.toString()[0];
  const gradients = {
    red: 'bg-linear-to-r from-[hsl(0,70%,50%)] to-[hsl(18,70%,55%)]',
    orange: 'bg-linear-to-r from-[hsl(36,70%,50%)] to-[hsl(54,70%,55%)]',
    yellow: 'bg-linear-to-r from-[hsl(72,70%,48%)] to-[hsl(90,70%,52%)]',
    lime: 'bg-linear-to-r from-[hsl(108,70%,45%)] to-[hsl(126,70%,50%)]',
    green: 'bg-linear-to-r from-[hsl(144,70%,42%)] to-[hsl(162,70%,47%)]',
    cyan: 'bg-linear-to-r from-[hsl(180,70%,45%)] to-[hsl(198,70%,50%)]',
    blue: 'bg-linear-to-r from-[hsl(216,70%,50%)] to-[hsl(234,70%,55%)]',
    indigo: 'bg-linear-to-r from-[hsl(252,70%,52%)] to-[hsl(270,70%,58%)]',
    violet: 'bg-linear-to-r from-[hsl(288,70%,52%)] to-[hsl(306,70%,58%)]',
    pink: 'bg-linear-to-r from-[hsl(324,70%,52%)] to-[hsl(342,70%,58%)]',
  };

  const randomIndex = Object.values(gradients)[index];

  return randomIndex;
}
