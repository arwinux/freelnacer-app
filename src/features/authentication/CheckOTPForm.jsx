import { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import { TbClockHour5, TbPasswordFingerprint, TbSend2 } from 'react-icons/tb';
import { RiShieldCheckFill } from 'react-icons/ri';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { checkOTP } from '../../services/authServices';
import { useNavigate } from 'react-router-dom';
import { RESEND_TIME } from './AuthContainer';
import Loading from '../../ui/Loading';
import useNavigateHome from '../../hooks/useNavigateHome';

function CheckOTPForm({ phoneNumber, onBack, onReSendOtp, time, setTime }) {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const navigateHome = useNavigateHome();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOTP,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);

      if (!user.isActive) return navigate('/complete-profile');
      if (user.status !== 2) {
        navigateHome();
        toast('پروفایل شما در انتظار تایید است', { icon: 'ℹ️' });
        return;
      }
      if (user.role === 'OWNER') return navigate('/client');
      if (user.role === 'FREELANCER') return navigate('/freelancer');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [setTime, time]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
            <TbPasswordFingerprint className="size-10 mx-2 text-white" />
          </div>

          <p className="text-white text-3xl font-bold">Verify OTP</p>
          <div className="flex gap-1 text-white text-sm">
            <p className="font-medium">Code sent to </p>
            <span className="font-bold">{phoneNumber}</span>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="bg-zinc-300 h-[7px] rounded-b-md overflow-hidden">
          <div
            className={`h-full transition-all duration-1000 ease-linear ${
              time > 70
                ? 'bg-linear-to-r from-[#cafe48] to-[#2afe41]'
                : time > 50
                ? 'bg-linear-to-r from-[#02b5d7] to-[#0184b1]'
                : time > 10
                ? 'bg-linear-to-r from-orange-500 to-amber-500'
                : 'bg-linear-to-r from-red-500 to-rose-500'
            }`}
            style={{ width: `${(time / RESEND_TIME) * 100}%` }}
          ></div>
        </div>
        {/* Form */}
        <div className="p-6">
          <form
            onSubmit={checkOtpHandler}
            className="flex gap-y-5 flex-col"
            action=""
          >
            <div className="form-card__details my-2  cursor-default select-none">
              <p className="text-lg font-semibold">Enter 6-digit code</p>
              <p
                className={`px-2 border border-zinc-300 bg-zinc-100 rounded-md font-semibold text-sm ${
                  time > 70
                    ? 'text-lime-600'
                    : time > 50
                    ? 'text-sky-500'
                    : time > 10
                    ? 'text-amber-600'
                    : 'text-red-500'
                } `}
              >
                {time > 0
                  ? `Code expires in ${formatTime(time)}`
                  : 'Code expired'}
              </p>
            </div>
            {/*OTP Input */}

            <div className="w-full flex justify-center items-center">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => (
                  <input
                    {...props}
                    className="otp-no-selection border border-zinc-300 focus:ring-2 focus:ring-orange-600"
                  />
                )}
                containerStyle="flex gap-x-2 flex-row justify-center items-center"
                inputStyle={{
                  width: '2.8rem',
                  height: '3.5rem',
                  color: '#000000',
                  background: '#E4E4E7',
                  borderRadius: '0.75rem',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  textAlign: 'center',
                }}
              />
            </div>

            {/* Button */}
            <button
              onClick={checkOtpHandler}
              type="submit"
              className="form-card__btn flex justify-center items-center gap-x-2"
            >
              Verify Code
              {isPending ? (
                <Loading />
              ) : (
                <RiShieldCheckFill className="size-6 mx-1 text-white" />
              )}
            </button>

            <div className="flex flex-col gap-y-2 justify-center items-center">
              <button
                onClick={onReSendOtp}
                disabled={time > 0}
                className={`${
                  time > 0 ? 'cursor-not-allowed' : 'cursor-pointer'
                } ${time > 0 ? 'font-normal' : 'font-semibold'} mt-4  ${
                  time > 0 ? 'text-gray-500' : 'text-orange-600'
                } text-sm ${
                  time > 0 ? 'hover:text-gray-600' : 'hover:text-orange-700'
                }`}
              >
                Resend Code {time > 0 ? formatTime(time) : ''}
              </button>

              <button
                onClick={onBack}
                className="text-gray-600 text-sm hover:text-black"
              >
                Change Phone Number
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckOTPForm;
