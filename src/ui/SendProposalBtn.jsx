import { LuClock2, LuSend } from 'react-icons/lu';
import useUser from '../features/authentication/useUser';
import { Link } from 'react-router-dom';
import { MdLockOutline } from 'react-icons/md';

function SendProposalBtn({ project, isProposalSubmited }) {
  // Check if project is OPEN first
  if (project.status === 'OPEN') {
    return (
      <div>
        {isProposalSubmited ? (
          <div className='items-center bg-blue-500/10 border border-blue-200 rounded-xl p-3 sm:p-4 flex gap-2 sm:gap-3'>
            <LuClock2 className='w-6 h-6  text-blue-700' />
            <span className='text-blue-700 font-medium  sm:text-sm md:text-base'>
              You have already submitted a proposal for this project
            </span>
          </div>
        ) : (
          <Link
            to='/freelancer/create-proposal'
            className='hover:scale-105 transition-all duration-300 inline-flex items-center gap-x-3 bg-radial-back px-4 py-3 rounded-xl text-component font-bold text-lg'
          >
            <LuSend />
            <span>Submit Proposal</span>
          </Link>
        )}
      </div>
    );
  }

  // Project is NOT OPEN (CLOSED, IN_PROGRESS, etc.)
  if (isProposalSubmited) {
    // Closed + proposal submitted
    return (
      <div className='items-center bg-primary-500/10 border border-primary-200 rounded-xl p-3 sm:p-4 flex gap-2 sm:gap-3'>
        <MdLockOutline className='w-6 h-6  text-primary-700' />
        <span className='text-primary-700 font-medium  sm:text-sm md:text-base'>
          Project is no longer open. Your proposal has been submitted and is on
          file
        </span>
      </div>
    );
  }

  // Closed + no proposal submitted
  return (
    <div className='items-center bg-red-500/10 border border-red-200 rounded-xl p-3 sm:p-4 flex gap-2 sm:gap-3'>
      <MdLockOutline className='w-6 h-6  text-red-700' />
      <span className='text-red-700 font-medium  sm:text-sm md:text-base'>
        This project is closed and not accepting new proposals
      </span>
    </div>
  );
}
export default SendProposalBtn;
