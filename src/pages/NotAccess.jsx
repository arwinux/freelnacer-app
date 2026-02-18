import { IoArrowBack } from 'react-icons/io5';
import accessdeneid from '../assets/images/accessdeneid.svg';
import { useNavigate } from 'react-router-dom';
function NotAccess() {
  const navigateBack = useNavigate();
  return (
    <div className='page p-10 bg-background flex flex-col justify-center items-center'>
      <img className='w-xl' src={accessdeneid} alt='' />
      <div className='flex flex-col justify-center items-center gap-y-5'>
        <p className='text-title font-bold text-2xl sm:text-3xl md:text-5xl'>
          Access Denied
        </p>
        <p className='text-title font-light italic text-xl text-center sm:text-2xl md:text-3xl'>
          You don't have permissions to access this page
        </p>
        <button onClick={() => navigateBack(-2)} className='secondary-btn'>
          <IoArrowBack className='size-9 role-icon text-notfound' />
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotAccess;
