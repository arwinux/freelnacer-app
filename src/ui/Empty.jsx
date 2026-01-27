import { FiBriefcase } from 'react-icons/fi';

function Empty({ resourceName, iconbtn, textbtn, onClick, className }) {
  return (
    <div
      className={`flex flex-col gap-y-4 mt-20 justify-center items-center ${className}`}
    >
      <FiBriefcase className="size-32 text-zinc-300" />
      <span className="font-medium text-lg text-subtitle">
        "{resourceName}"
      </span>
      <button
        onClick={onClick}
        className="bg-radial-back flex justify-center items-center hover:scale-105 transition-all duration-500 gap-x-2 px-3 py-2 text-color font-medium text-md rounded-xl"
      >
        {iconbtn}
        <span>{textbtn}</span>
      </button>
    </div>
  );
}

export default Empty;
