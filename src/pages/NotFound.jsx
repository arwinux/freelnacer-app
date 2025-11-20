import { FiSearch } from 'react-icons/fi';
import { IoArrowBack, IoHome, IoHomeOutline } from 'react-icons/io5';
import { ThreeDots } from 'react-loader-spinner';
import useNavigateBack from '../hooks/useNavigateBack';
import useNavigateHome from '../hooks/useNavigateHome';

function NotFound() {
  const navigateBack = useNavigateBack();
  const navigateHome = useNavigateHome();

  return (
    <div className="page bg-primary-500/5">
      <div className="flex gap-y-7 flex-col justify-center items-center">
        <p className="font-bold text-xl text-primary-600">404</p>
        <p className="font-bold text-4xl">Page Not Found</p>
        <p className="text-center text-zinc-600 max-w-sm">
          Oops! The page you're looking for seems to have wandered off. Let's
          get you back on track.
        </p>
        <div className="flex gap-x-4">
          <button
            onClick={navigateHome}
            className="text-color font-semibold py-2 px-4 rounded-xl text-lg bg-radial-back flex gap-1 items-center justify-center group transition-all"
          >
            <IoHome className="size-9 role-icon text-color hidden group-hover:inline " />
            <IoHomeOutline className="size-9 role-icon text-color group-hover:hidden" />
            Go Home
          </button>

          <button onClick={navigateBack} className="secondary-btn">
            <IoArrowBack className="size-9 role-icon text-slate-800" />
            Go Back
          </button>
        </div>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#ea580c"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div className="flex justify-center items-center px-20 py-4 bg-component rounded-xl border-2 border-primary-500/15">
          <FiSearch className="size-9 role-icon text-primary-600" />
          <p className="text-zinc-600 text-sm">
            Try searching for what you need or contact support
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
