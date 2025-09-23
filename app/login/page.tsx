"use client";

import Image from "next/image";
import whiteLogo from "@images/svg/white-logo.svg";
import bgImage from "@images/png/login-bg.png";
import CustomInput from "@/components/CustomInput";

export default function Login() {
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
          <form action="" className="mt-10 w-full flex flex-col gap-5">
            <CustomInput label="AV Code" placeholder="Enter AV Code" />
            <button className="w-full h-11 rounded-xl cursor-pointer bg-[#375DFB] hover:bg-[#244df0] transition-all font-normal text-base text-white">
              Sign in
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
