import TextField from '../../ui/TextField';
import { RiShieldKeyholeFill } from 'react-icons/ri';
import { TbSend2 } from 'react-icons/tb';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import Loading from '../../ui/Loading';

function SendOTPForm({ onSendOtp, isSendingOtp, phoneNumber, onChange }) {
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
            <RiShieldKeyholeFill className="size-10 mx-2 fill-white" />
          </div>

          <p className="text-white text-3xl font-bold">Wellcome</p>
          <p className="text-white text-sm">
            Enter your phone number to continue
          </p>
        </div>
      </div>

      <div className="bg-white">
        {/* Form */}
        <div className="p-6">
          <form
            onSubmit={onSendOtp}
            className="flex gap-y-5 flex-col"
            action=""
          >
            <div className="form-card__details my-4 cursor-default select-none">
              <p className="text-lg font-semibold">Login or Sign Up</p>
              <p className="text-md text-slate-500">
                We'll send you a verification code
              </p>
            </div>
            {/* Input */}
            <div className="form-card__input-tel">
              <MdOutlinePhoneInTalk className="size-8 w-14 text-zinc-500" />
              <TextField
                name="phoneNumber"
                value={phoneNumber}
                onChange={onChange}
                placeholder="Enter Phone Number"
                type="tel"
              />
            </div>
            {/* Button */}
            <button
              type="submit"
              className="form-card__btn flex justify-center items-center gap-x-2"
            >
              Send OTP
              {isSendingOtp ? (
                <Loading />
              ) : (
                <TbSend2 className="size-6 mx-1 text-white" />
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

export default SendOTPForm;
