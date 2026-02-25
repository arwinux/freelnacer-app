import { LuFolderOpen } from 'react-icons/lu';

function Category({ title, titleEnglish, description,type }) {
  return (
    <div className='flex flex-col gap-y-2 justify-start hover:scale-105 transition-all duration-300 cursor-default select-none bg-component shadow-xl shadow-black/15 overflow-hidden rounded-xl'>
      <div
        className={`bg-linear-to-r from-gray-500 to-primary-500 py-6 flex justify-center items-center`}
      >
        <LuFolderOpen className='size-14 text-component' />
      </div>
      <div className='p-4 flex flex-col justify-center gap-y-2'>
        <p className='text-xl font-bold'>{title}</p>
        <p className='flex w-fit text-base! justify-center items-center badge-category'>
          {titleEnglish}
        </p>
        <p className='text-subtitle'>{description}</p>
        <p className='flex w-fit justify-center items-center badge-category'>{type}</p>
      </div>
    </div>
  );
}

export default Category;

function getRandomGradient() {
  const gradients = {
    red: ['bg-linear-to-r from-[#F66B11] to-[#E83923]'],
    blue: ['bg-linear-to-r from-[#42B7FE] to-[#0BE8FE]'],
    yellow: ['bg-linear-to-r from-[#FFBA35] to-[#FD892D]'],
    green: ['bg-linear-to-r from-[#41ED90] to-[#3AF6C8]'],
    indigo: ['bg-linear-to-r from-[#6976DF] to-[#7353AE]'],
  };

  // Get all gradients as a flat array
  const allGradients = Object.values(gradients).flat();
  const randomIndex = Math.floor(Math.random() * allGradients.length);

  return allGradients[randomIndex];
}
