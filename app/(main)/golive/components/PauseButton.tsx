"use client";

import PauseIcon from "@icons/PauseIcon";

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

export default function PauseButton({
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="flex justify-center gap-2 items-center w-[157px] h-[43px] cursor-pointer rounded-2xl text-white bg-[#DF1C41] hover:bg-[#cf1537] transition-all"
    >
      <PauseIcon /> Pause
    </button>
  );
}
