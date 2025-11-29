import { FaArrowLeft } from 'react-icons/fa';

function Project() {
  return (
    <div className="w-full h-60 bg-radial-back">
      <div className="w-full flex items-center h-full  lg:max-w-6xl mx-auto">
        <button className="flex justify-center items-center transition-all duration-400 gap-x-4 hover:bg-component/20 rounded-md font-bold text-sm text-color tex px-4 py-3 ">
          <FaArrowLeft className='size-3'/>
          <span>Back to Projects</span>
        </button>
      </div>
    </div>
  );
}

export default Project;
