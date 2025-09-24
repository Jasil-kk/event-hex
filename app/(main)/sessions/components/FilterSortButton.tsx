"use client";

import FilterIcon from "@icons/FilterIcon";
import SortIcon from "@icons/SortIcon";

interface FilterSortButtonProps {
  disabled?: boolean;
  filterClick?: () => void;
  sortClick?: () => void;
}

export default function FilterSortButton({
  disabled = false,
  filterClick,
  sortClick,
}: FilterSortButtonProps) {
  return (
    <div className="w-fit flex items-center rounded-md border border-[#E2E4E9] text-[#525866] font-normal text-sm overflow-hidden">
      <button
        disabled={disabled}
        onClick={filterClick}
        className={`w-16 h-8 flex items-center justify-center gap-1 border-r border-[#E2E4E9] bg-white transition-all ${
          disabled
            ? "cursor-not-allowed opacity-70"
            : "hover:bg-slate-100 cursor-pointer"
        }`}
      >
        <FilterIcon />
        Filter
      </button>
      <button
        disabled={disabled}
        onClick={sortClick}
        className={`w-20 h-8 flex items-center justify-center gap-1 bg-white transition-all ${
          disabled
            ? "cursor-not-allowed opacity-70"
            : "hover:bg-slate-100 cursor-pointer"
        }`}
      >
        <SortIcon />
        Sort by
      </button>
    </div>
  );
}
