import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOTP } from "../../services/authServices";

export const RESEND_TIME = 90;

function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    mutationFn: getOTP,
  });

  const [time, setTime] = useState(RESEND_TIME);

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      setTime(RESEND_TIME);
      toast.success(data.message);
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
            phoneNumber={phoneNumber}
            onSendOtp={sendOtpHandler}
            isSendingOtp={isSendingOtp}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            time={time}
            setTime={setTime}
            onReSendOtp={sendOtpHandler}
            phoneNumber={phoneNumber}
            onBack={() => setStep((s) => s - 1)}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="page">
      {renderStep()}
      <p className="mt-5 font-semibold cursor-default select-none">
        🔒 Secure authentication powered by OTP
      </p>
    </div>
  );
}

export default AuthContainer;
