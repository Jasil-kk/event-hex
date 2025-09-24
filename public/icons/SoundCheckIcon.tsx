import React from "react";

interface SoundCheckIconProps {
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const SoundCheckIcon: React.FC<SoundCheckIconProps> = ({
  width = "18",
  height = "15",
  className,
  color = "#ffffff",
}) => {
  return (
    <svg
      className={className || ""}
      width={width}
      height={height}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 3.75H5.25V11.25H3.75V3.75ZM0.75 6H2.25V9H0.75V6ZM6.75 0H8.25V13.5H6.75V0ZM9.75 1.5H11.25V15H9.75V1.5ZM12.75 3.75H14.25V11.25H12.75V3.75ZM15.75 6H17.25V9H15.75V6Z"
        fill={color}
      />
    </svg>
  );
};

export default SoundCheckIcon;
