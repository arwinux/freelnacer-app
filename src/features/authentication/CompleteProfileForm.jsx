import { useState } from 'react';
import { MdEmail, MdOutlineMail } from 'react-icons/md';
import TextField from '../../ui/TextField';
import { RiShieldUserFill } from 'react-icons/ri';
import { FaRegUser, FaSuitcase, FaUser, FaUserTie } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';
import { completeProfile } from '../../services/authServices';
import toast from 'react-hot-toast';
import Loading from '../../ui/Loading';
import { BiSolidCheckCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import useNavigateHome from '../../hooks/useNavigateHome';

function CompleteProfileForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('FREELANCER');
  const navigate = useNavigate();
  const moveHome = useNavigateHome();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
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
    <div className="form-card">
      {/* Header with image */}
      <div className="form-card__header">
        <img
          className="w-full h-full object-cover"
          src="/src/assets/images/login-header.jpg"
          alt=""
        />
        <div className="absolute inset-0 p-6 gap-y-2 cursor-default select-none">
          <div className="badge mb-5">
            <RiShieldUserFill className="size-10 mx-2 fill-white" />
          </div>

          <p className="text-color text-2xl sm:text-3xl font-bold">
            Complete Profile
          </p>
          <p className="text-color text-sm">
            Just a few more details to get started
          </p>
        </div>
      </div>

      <div className="bg-component">
        {/* Form */}
        <div className="p-6">
          <form className="flex gap-y-5 flex-col" action="">
            {/* Input */}
            <div className="form-card__input-tel py-2">
              {name === '' ? (
                <FaRegUser className="size-6 w-14 text-subtitle" />
              ) : (
                <FaUser className="size-6 w-14 text-subtitle" />
              )}
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="fullname"
                placeholder="Enter your full name"
                type="tel"
                classname="font-semibold pl-4"
              />
            </div>
            <div className="form-card__input-tel py-2">
              {email === '' ? (
                <MdOutlineMail className="size-7 w-14 text-subtitle" />
              ) : (
                <MdEmail className="size-7 w-14 text-subtitle" />
              )}

              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="example@gmail.com"
                type="tel"
                classname="font-semibold pl-4"
              />
            </div>
            {/* Roles */} {/* Freelancer Roles */}
            <div className="flex flex-wrap justify-start sm:justify-center gap-x-2 gap-y-3 items-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setRole('FREELANCER');
                }}
                className={`transition-all duration-300 ${
                  role === 'FREELANCER' ? 'primary-btn' : 'text-zinc-200'
                } disable-role-btn`}
              >
                {role === 'FREELANCER' ? (
                  <FaUserTie className="role-icon text-color" />
                ) : (
                  <FaUserTie className="role-icon text-subtitle/70" />
                )}

                <label
                  className={`text-lg font-semibold px-2 rounded-xl cursor-pointer ${
                    role === 'FREELANCER' ? 'text-color' : 'text-subtitle'
                  }`}
                >
                  Freelancer
                </label>
              </button>
              {/* Client Roles */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setRole('OWNER');
                }}
                className={`transition-all duration-300 ${
                  role === 'OWNER' ? 'primary-btn' : 'text-zinc-200 '
                } disable-role-btn `}
              >
                {role === 'OWNER' ? (
                  <FaSuitcase className="role-icon text-color" />
                ) : (
                  <FaSuitcase className="role-icon text-subtitle/70" />
                )}

                <label
                  className={`text-lg font-semibold px-2 rounded-xl cursor-pointer ${
                    role === 'OWNER' ? 'text-color' : 'text-subtitle'
                  }`}
                >
                  Client
                </label>
              </button>
            </div>
            {/* Button */}
            <button
              onClick={handleSubmit}
              type="submit"
              className="form-card__btn flex justify-center items-center gap-x-2"
            >
              Complete Profile
              {isPending ? (
                <Loading />
              ) : (
                <BiSolidCheckCircle className="size-6 mx-1 text-[#2afe41]" />
              )}
            </button>
            <div className="bg-gray-300 w-full h-px"></div>
            <p className="w-full text-center text-gray-500 text-[13px]">
              By continuing, you agree to our Terms & Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
