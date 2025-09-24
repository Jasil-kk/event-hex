import React from "react";

interface FilterIconProps {
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const FilterIcon: React.FC<FilterIconProps> = ({
  width = "12",
  height = "8",
  className,
  color = "#0A0D14",
}) => {
  return (
    <svg
      className={className || ""}
      width={width}
      height={height}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.79998 7.59999H7.19998V6.39999H4.79998V7.59999ZM0.599976 0.399994V1.59999H11.4V0.399994H0.599976ZM2.39998 4.59999H9.59998V3.39999H2.39998V4.59999Z"
        fill={color}
      />
    </svg>
  );
};

export default FilterIcon;
