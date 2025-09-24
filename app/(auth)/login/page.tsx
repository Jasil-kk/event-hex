"use client";

import Image from "next/image";
import whiteLogo from "@images/svg/white-logo.svg";
import bgImage from "@images/png/login-bg.png";
import CustomInput from "@/components/CustomInput";
import { useLogin } from "./hooks/useLogin";

export default function Login() {
  const { code, setCode, error, loading, handleSubmit } = useLogin();
  return (
    <div className="w-full min-h-screen bg-white grid grid-cols-1 md:grid-cols-[60%_40%]">
      <div
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="hidden md:block w-full h-full bg-slate-800 bg-cover text-white p-10"
      >
        <Image src={whiteLogo} alt="Logo" width={266} />
        <h1 className="mt-12 font-bold text-6xl font-manrope max-w-[500px]">
          Engage, Inspire Inform With Ai
        </h1>
        <h2 className="mt-8 font-normal text-5xl font-manrope max-w-[600px]">
          AI-Based Real-Time Content Summarisation
        </h2>
      </div>
      <div className="w-full flex flex-col items-center p-5 pb-8">
        <div className="my-auto w-full max-w-[360px]">
          <h3 className="text-[#0C1421] font-bold text-3xl">
            Enter AV Code 🎧
          </h3>
          <p className="mt-5 text-[#313957] font-normal text-base">
            Provide your assigned AV team code to continue.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-10 w-full flex flex-col gap-5"
          >
            <CustomInput
              label="AV Code"
              placeholder="Enter AV Code"
              value={code}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCode(e.target.value)
              }
              error={error}
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full h-11 rounded-xl bg-[#375DFB] cursor-pointer transition-all font-normal text-base text-white flex items-center justify-center ${
                loading ? "opacity-80" : "hover:bg-[#244df0]"
              }`}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>
        <p className="text-[#31353F] font-normal text-sm">
          Secure access portal
        </p>
      </div>
    </div>
  );
}
