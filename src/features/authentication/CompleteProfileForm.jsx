import { MdEmail, MdOutlineMail } from 'react-icons/md';
import TextField from '../../ui/TextField';
import { RiShieldUserFill } from 'react-icons/ri';
import { FaRegUser, FaSuitcase, FaUser, FaUserTie } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';
import { completeProfile } from '../../services/authService';
import toast from 'react-hot-toast';
import Loading from '../../ui/Loading';
import { BiSolidCheckCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import useNavigateHome from '../../hooks/useNavigateHome';
import { useForm } from 'react-hook-form';

function CompleteProfileForm() {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: 'FREELANCER',
    },
  });

  const navigate = useNavigate();
  const moveHome = useNavigateHome();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const selectedRole = watch('role');
  const emailLable = watch('email');
  const nameLable = watch('name');

  const onSubmit = async (data) => {
    if (!data.role) {
      toast.error('Please choose your role');
      return;
    }

    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);

      if (user.status !== 2) {
        moveHome();
        toast('پروفایل شما در انتظار تایید است', { icon: 'ℹ️' });
        return;
      }

      if (user.role === 'OWNER') return navigate('/client');
      if (user.role === 'FREELANCER') return navigate('/freelancer');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className='form-card'>
      {/* Header */}
      <div className='form-card__header'>
        <img
          className='w-full h-full object-cover'
          src='/src/assets/images/login-header.jpg'
          alt=''
        />
        <div className='absolute inset-0 p-6 gap-y-2 cursor-default select-none'>
          <div className='badge mb-5'>
            <RiShieldUserFill className='size-10 mx-2 fill-white' />
          </div>
          <p className='text-color text-2xl sm:text-3xl font-bold'>
            Complete Profile
          </p>
          <p className='text-color text-sm'>
            Just a few more details to get started
          </p>
        </div>
      </div>

      {/* Body */}
      <div className='bg-component'>
        <div className='p-6'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex gap-y-5 flex-col'
          >
            {/* FULL NAME */}
            <div className='flex flex-col'>
              <div className='form-card__input-tel py-2'>
                {nameLable === '' ? (
                  <FaRegUser className='size-6 w-14 text-subtitle' />
                ) : (
                  <FaUser className='size-6 w-14 text-subtitle' />
                )}
                <TextField
                  name='name'
                  register={register}
                  placeholder='Enter your full name'
                  type='text'
                  classname='font-semibold pl-4'
                  validationSchema={{
                    required: 'Name is required',
                    minLength: {
                      value: 3,
                      message: 'Title must be at least 3 characters',
                    },
                    maxLength: {
                      value: 25,
                      message: 'Keep it under 25 characters',
                    },
                  }}
                  errors={errors}
                />
              </div>
              {errors && errors['name'] && (
                <span className='text-red-500 ml-2 text-sm mt-2'>
                  {errors['name']?.message}
                </span>
              )}
            </div>

            {/* EMAIL */}
            <div className='flex flex-col'>
              <div className='form-card__input-tel py-2'>
                {emailLable === '' ? (
                  <MdOutlineMail className='size-7 w-14 text-subtitle' />
                ) : (
                  <MdEmail className='size-7 w-14 text-subtitle' />
                )}
                <TextField
                  name='email'
                  register={register}
                  placeholder='example@gmail.com'
                  type='email'
                  classname='font-semibold pl-4'
                  validationSchema={{
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                      message: 'Email is not valid',
                    },
                  }}
                  errors={errors}
                />
              </div>
              {errors && errors['email'] && (
                <span className='text-red-500 ml-2 text-sm mt-2'>
                  {errors['email']?.message}
                </span>
              )}
            </div>

            <div className='flex flex-wrap text-lg font-medium justify-start sm:justify-center gap-x-2 gap-y-3 items-center'>
              {/* FREELANCER */}
              <button
                type='button'
                onClick={() => setValue('role', 'FREELANCER')}
                className={`rounded-xl text-color flex justify-center items-center flex-1 px-2 py-1  ${
                  selectedRole === 'FREELANCER'
                    ? 'primary-btn font-semibold'
                    : 'bg-zinc-700/20 text-subtitle'
                }`}
              >
                <FaUserTie
                  className={`role-icon ${
                    selectedRole === 'FREELANCER'
                      ? 'text-color'
                      : 'text-subtitle/70'
                  }`}
                />
                Freelancer
              </button>

              {/* CLIENT */}
              <button
                type='button'
                onClick={() => setValue('role', 'OWNER')}
                className={`rounded-xl text-color flex justify-center items-center flex-1 px-2 py-1  ${
                  selectedRole === 'OWNER'
                    ? 'primary-btn font-semibold'
                    : 'bg-zinc-700/20 text-subtitle'
                }`}
              >
                <FaSuitcase
                  className={`role-icon ${
                    selectedRole === 'OWNER' ? 'text-color' : 'text-subtitle/70'
                  }`}
                />
                Client
              </button>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type='submit'
              className='form-card__btn flex justify-center items-center gap-x-2'
            >
              Complete Profile
              {isPending ? (
                <Loading />
              ) : (
                <BiSolidCheckCircle className='size-6 mx-1 text-[#2afe41]' />
              )}
            </button>

            <div className='bg-gray-300 w-full h-px'></div>
            <p className='w-full text-center text-gray-500 text-[13px]'>
              By continuing, you agree to our Terms & Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
