import React, { useEffect } from 'react';
import PageHeader from '../ui/PageHeader';
import useUser from '../features/authentication/useUser';
import LoadingPage from '../ui/LoadingPage';
import toDateShort from '../utils/toDateShort';
import { RiPhoneFill, RiPoliceBadgeFill } from 'react-icons/ri';
import { FaCalendarDay, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BiCalendarWeek, BiSolidCalendarWeek } from 'react-icons/bi';

export default function Profile() {
  const { isLoading, user } = useUser();
  const userDetail = isLoading ? '...Loading' : user;

  console.log(userDetail);

  if (isLoading) return <LoadingPage />;

  return (
    <div className='flex h-full mt-12 justify-center items-center flex-col w-full page-set'>
      <PageHeader
        badge='User Projects'
        title='Your Profile Details'
        description={'See and change your profile details'}
        color='blue'
      />

      <div className='w-full select-none mt-10 flex flex-col md:flex-row items-center gap-x-7 bg-color max-w-3xl rounded-xl shadow-lg scroll-auto'>
        <div className='w-full h-32 md:w-2/5 md:h-full hover:text-red-200 transition-all duration-300 flex justify-center items-center bg-radial-back rounded-xl text-color font-bold text-8xl'>
          {`${userDetail.name.toUpperCase()[0]}${userDetail.name.toUpperCase()[1]}`}
        </div>

        <div className='flex w-full px-10 md:px-0 md:pe-6 md:py-4 md:w-3/5 mt-16 md:mt-0 items-start flex-col gap-x-3 gap-y-6 '>
          <div className='flex md:flex-row flex-col w-full gap-4'>
            <div className='flex w-full flex-col gap-y-1'>
              <div className='flex items-center gap-x-1'>
                <FaUser className='size-4' />
                <span className='font-bold'>Name</span>
              </div>
              <div className='flex w-full h-12 badge-profile-detail gap-x-2 items-center'>
                <span className=''>{userDetail.name}</span>
              </div>
            </div>

            <div className='flex w-full flex-col gap-y-1'>
              <div className='flex items-center gap-x-1'>
                <RiPoliceBadgeFill className='size-4' />
                <span className='font-bold'>Role</span>
              </div>
              <div className='flex w-full h-12 badge-profile-detail text-green-700! bg-green-300/75! border-green-500/50! gap-x-2 items-center'>
                <span className=''>{userDetail.role}</span>
              </div>
            </div>
          </div>

          <div className='flex md:flex-row flex-col w-full gap-4'>
            <div className='flex w-full md:w-3/4 flex-col gap-y-1'>
              <div className='flex items-center gap-x-1'>
                <MdEmail className='size-4' />
                <span className='font-bold'>Email</span>
              </div>
              <div className='flex w-full h-12 badge-profile-detail gap-x-2 items-center'>
                <span className='text-nowrap overflow-auto'>
                  {userDetail.email}
                </span>
              </div>
            </div>

            <div className='flex w-full md:w-1/3 flex-col gap-y-1'>
              <div className='flex items-center gap-x-1'>
                <RiPhoneFill className='size-4' />
                <span className='font-bold'>Phone</span>
              </div>
              <div className='flex w-full h-12 badge-profile-detail gap-x-2 items-center'>
                <span className=''>{userDetail.phoneNumber}</span>
              </div>
            </div>
          </div>

          <div className='flex md:flex-row flex-col w-full gap-4'>
            <div className='flex w-full flex-col gap-y-1'>
              <div className='flex items-center gap-x-1'>
                <BiSolidCalendarWeek className='size-4' />
                <span className='font-bold'>Joined At</span>
              </div>
              <div className='flex w-full h-12 badge-profile-detail gap-x-2 items-center'>
                <span className=''>{toDateShort(userDetail.createdAt)}</span>
              </div>
            </div>

            <div className='flex w-full flex-col gap-y-1'>
              <div className='flex items-center gap-x-1'>
                <MdEmail className='size-4' />
                <span className='font-bold'>ID</span>
              </div>
              <div className='flex w-full h-12 badge-profile-detail text-blue-700! bg-blue-300/75! border-blue-500/50! gap-x-2 items-center font-normal! justify-center tracking-widest'>
                <span className='text-nowrap'>{userDetail._id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
