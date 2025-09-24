"use client";

import logo from "@images/svg/logo.svg";
import glob from "@images/svg/glob.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 z-50 w-full h-16 bg-white border-b border-[#E2E4E9] flex items-center justify-between px-[5%] sm:px-[8%]">
      <Image
        src={logo}
        alt="Logo"
        width={169}
        onClick={() => router.push("/sessions")}
        className="cursor-pointer"
      />
      <Image src={glob} alt="Logo" width={16} height={16} />
    </header>
  );
}
