"use client";

import DownArrowIcon from "@/public/icons/DownArrowIcon";
import { useState, useRef, useEffect } from "react";
import translateIcon from "@images/png/translate-2.png";
import Image from "next/image";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  onSelect?: (option: DropdownOption) => void;
}

export default function Dropdown({
  options,
  placeholder = "Select...",
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOption | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: DropdownOption) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="relative w-full max-w-[190px]" ref={dropdownRef}>
      <button
        type="button"
        className="w-full bg-white border cursor-pointer border-[#E2E4E9] rounded-lg px-4 py-1.5 text-left flex items-center gap-1.5 text-sm text-[#0A0D14]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>
          <Image src={translateIcon} alt="Icon" />
        </span>
        {selected ? selected.label : placeholder}
        <span className="ml-auto transform transition-transform duration-200">
          <DownArrowIcon />
        </span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              className={`px-4 py-2 cursor-pointer text-sm text-[#0A0D14] ${
                option.value === selected?.value
                  ? "bg-blue-100"
                  : "hover:bg-slate-100"
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
