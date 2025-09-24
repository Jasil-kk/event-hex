"use client";

import PlayIcon from "@icons/PlayIcon";

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}

export default function GoLiveButton({
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="flex justify-center gap-2 items-center w-[157px] h-[43px] cursor-pointer rounded-2xl text-white bg-[#DF1C41] hover:bg-[#cf1537] transition-all"
    >
      <PlayIcon /> Go live
    </button>
  );
}
