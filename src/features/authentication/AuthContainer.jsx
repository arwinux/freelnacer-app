import React, { useEffect, useState } from 'react';
import SendOTPForm from './SendOTPForm';
import CheckOTPForm from './CheckOTPForm';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getOTP } from '../../services/authService';
import { useForm } from 'react-hook-form';
import useUser from './useUser';
import { useNavigate } from 'react-router-dom';

export const RESEND_TIME = 90;

function AuthContainer() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // const [phoneNumber, setPhoneNumber] = useState('');
  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    mutationFn: getOTP,
  });

  const { handleSubmit, register, getValues } = useForm();

  const [time, setTime] = useState(RESEND_TIME);

  const { isLoading, user } = useUser();
  useEffect(() => {
    if (user) navigate('/', { replace: true });
  }, [user]);

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      setTime(RESEND_TIME);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            onSendOtp={handleSubmit(sendOtpHandler)}
            isSendingOtp={isSendingOtp}
            register={register}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            time={time}
            setTime={setTime}
            onSendOtp={handleSubmit(sendOtpHandler)}
            phoneNumber={getValues('phoneNumber')}
            onBack={() => setStep((s) => s - 1)}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className='page'>
      {renderStep()}
      <p className='mt-5 font-semibold cursor-default select-none text-title'>
        🔒 Secure authentication powered by OTP
      </p>
    </div>
  );
}

export default AuthContainer;
