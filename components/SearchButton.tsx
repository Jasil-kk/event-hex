"use client";

import { useState } from "react";
import SearchIcon from "@/public/icons/SearchIcon";

interface SearchButtonProps {
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchButton({
  disabled = false,
  value,
  onChange,
}: SearchButtonProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex items-center">
      <input
        className={`h-8 outline-none border border-[#E2E4E9] rounded-lg text-black text-sm transition-all duration-300 
          ${show ? "w-48 opacity-100 mr-1 px-3" : "w-0 opacity-0 mr-0"} 
        `}
        value={value}
        onChange={onChange}
        placeholder="Search..."
        style={{ minWidth: show ? "120px" : "0px" }}
      />

      <button
        onClick={() => setShow(!show)}
        disabled={disabled}
        className={`h-8 w-8 bg-white border border-[#E2E4E9] grid place-items-center rounded-lg transition-all cursor-pointer 
          disabled:opacity-75 disabled:cursor-not-allowed hover:bg-slate-100 disabled:hover:bg-transparent`}
        aria-disabled={disabled}
      >
        <SearchIcon color="#525866" />
      </button>
    </div>
  );
}
