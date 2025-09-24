"use client";

import CrossIcon from "@icons/CrossIcon";

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

export default function LeaveButton({
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="flex justify-center gap-2 items-center w-[157px] h-[43px] border border-[#C2D6FF] cursor-pointer rounded-2xl text-[#375DFB] bg-[#EBF1FF] hover:bg-[#dae1f0] transition-all"
    >
      <CrossIcon /> Leave Section
    </button>
  );
}
