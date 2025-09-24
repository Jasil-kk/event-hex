import React from "react";

interface ClockIconProps {
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const ClockIcon: React.FC<ClockIconProps> = ({
  width = "12",
  height = "12",
  className,
  color = "#F27B2C",
}) => {
  return (
    <svg
      className={className || ""}
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM6.6 6V3H5.4V7.2H9V6H6.6Z"
        fill={color}
      />
    </svg>
  );
};

export default ClockIcon;
