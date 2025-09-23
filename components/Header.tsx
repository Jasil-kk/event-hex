"use client";

import logo from "@images/svg/logo.svg";
import glob from "@images/svg/glob.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-16 bg-white border-b border-[#E2E4E9] flex items-center justify-between px-[5%] sm:px-[8%]">
      <Image src={logo} alt="Logo" width={169} />
      <Image src={glob} alt="Logo" width={16} height={16} />
    </header>
  );
}
