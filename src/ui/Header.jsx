import { MdArrowBackIosNew } from 'react-icons/md';
function Header({ onNavOpen }) {
  return (
    <div className="flex bg-white border-0 border-b border-zinc-200 shadow-md shadow-zinc-200 font-bold items-center gap-x-4 px-3 py-5">
      <button
        onClick={onNavOpen}
        className="flex justify-center bg-transparent items-center rounded-md size-8 hover:bg-primary-500/10 p-2"
      >
        <MdArrowBackIosNew className="size-4 text-primary-700" />
      </button>
      <p className="text-xl font-bold radial-text">FreelanceHub</p>
    </div>
  );
}

export default Header;
