"use client";

import SoundCheckIcon from "@icons/SoundCheckIcon";

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

export default function SoundCheckButton({
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="flex justify-center gap-2 items-center w-[157px] h-[43px] cursor-pointer rounded-2xl text-white bg-[#375DFB] hover:bg-[#2b51ec] transition-all"
    >
      <SoundCheckIcon /> Sound Check
    </button>
  );
}
