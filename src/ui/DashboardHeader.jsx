import { FaArrowRight } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { LuSparkles } from 'react-icons/lu';

export default function DashboardHeader() {
  return (
    <div className="w-full py-24 px-6 bg-radial-back opacity-90 ">
      <div className="flex flex-col gap-y-12 justify-center items-start lg:max-w-7xl mx-auto">
        <span className="inline-flex self-center sm:self-start gap-x-2 text-sm font-bold backdrop-blur-xl badge-glass px-4 py-2 rounded-full shadow-xl">
          <LuSparkles className="size-5" />
          <span>Welcome to Premium Experience</span>
        </span>

        <div className="flex flex-col gap-y-7 w-full items-center sm:items-start">
          {/* User's name */}
          <div className="h-28 flex flex-col gap-y-4 justify-center items-center">
            <p className="w-full text-3xl text-center sm:text-start sm:text-4xl xl:text-7xl font-bold text-color/90 text-shadow">
              Hello, Mohammad Reza 👋
            </p>

            <span className="w-full text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl text-color/90 text-shadow">
              🚀 Ready to find the perfect talent for your project?
            </span>
          </div>
        </div>

        <div className="flex w-full items-center gap-y-4 flex-col sm:flex-row gap-x-3">
          <button className="flex w-full sm:w-fit cursor-pointer hover:-translate-y-1.5 transition-all duration-300 hover:bg-primary-50 shadow-xl hover:shadow-primary-400 items-center justify-center gap-x-4 font-bold rounded-xl text-primary-500 bg-component py-3 px-6">
            <FiPlus />
            <span>Create New Project</span>
          </button>
          <button className="flex w-full sm:w-fit badge-glass  cursor-pointer! transition-all duration-300 hover:text-title hover:bg-component/25 shadow-xl hover:shadow-primary-400 items-center justify-center gap-x-4 font-bold rounded-xl text-primary-500 bg-component py-3 px-6">
            <span>View Profile</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
