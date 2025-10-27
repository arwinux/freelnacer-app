import { useState } from "react";
import { MdEmail, MdOutlineMail } from "react-icons/md";
import TextField from "../../ui/TextField";
import { RiShieldUserFill } from "react-icons/ri";
import { FaRegUser, FaSuitcase, FaUser, FaUserTie } from "react-icons/fa";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("FREELANCER");

  return (
    <div className="form-card">
      {/* Header with image */}
      <div className="form-card__header">
        <img
          className="w-full h-full object-cover"
          src="/src/assets/images/login-header.jpg"
          alt=""
        />
        <div className="absolute inset-0 p-6 space-y-2 cursor-default select-none">
          <div className="badge mb-5">
            <RiShieldUserFill className="size-10 mx-2 fill-white" />
          </div>

          <p className="text-white text-2xl sm:text-3xl font-bold">
            Complete Profile
          </p>
          <p className="text-white text-sm">
            Just a few more details to get started
          </p>
        </div>
      </div>

      <div className="bg-white">
        {/* Form */}
        <div className="p-6">
          <form className="flex space-y-5 flex-col" action="">
            {/* Input */}
            <div className="form-card__input-tel py-2">
              {name === "" ? (
                <FaRegUser className="size-6 w-14 text-zinc-500" />
              ) : (
                <FaUser className="size-6 w-14 text-zinc-500" />
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
              {email === "" ? (
                <MdOutlineMail className="size-7 w-14 text-zinc-500" />
              ) : (
                <MdEmail className="size-7 w-14 text-zinc-500" />
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
                  setRole("FREELANCER");
                }}
                className={`transition-all duration-300 ${
                  role === "FREELANCER"
                    ? "bg-gradient-to-r from-[#FF002A] to-[#FF6801]"
                    : "text-zinc-200"
                } role-btn`}
              >
                {role === "FREELANCER" ? (
                  <FaUserTie className="role-icon text-white" />
                ) : (
                  <FaUserTie className="role-icon text-zinc-500/70" />
                )}

                <label
                  className={`text-lg font-semibold px-2 rounded-xl cursor-pointer ${
                    role === "FREELANCER" ? "text-white" : "text-zinc-500"
                  }`}
                >
                  Freelancer
                </label>
              </button>
              {/* Client Roles */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setRole("OWNER");
                }}
                className={`transition-all duration-300 ${
                  role === "OWNER"
                    ? "bg-gradient-to-r from-[#FF002A] to-[#FF6801]"
                    : "text-zinc-200 "
                } role-btn `}
              >
                {role === "OWNER" ? (
                  <FaSuitcase className="role-icon text-white" />
                ) : (
                  <FaSuitcase className="role-icon text-zinc-500/70" />
                )}

                <label
                  className={`text-lg font-semibold px-2 rounded-xl cursor-pointer ${
                    role === "OWNER" ? "text-white" : "text-zinc-500"
                  }`}
                >
                  Client
                </label>
              </button>
            </div>
            {/* Button */}
            <button
              type="submit"
              className="form-card__btn flex justify-center items-center gap-x-2"
            >
              Complete Profile
            </button>
            <div className="bg-gray-300 w-full h-[1px]"></div>
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
