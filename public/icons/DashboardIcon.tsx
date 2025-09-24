import React from "react";

interface DashboardIconProps {
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const DashboardIcon: React.FC<DashboardIconProps> = ({
  width = "14",
  height = "14",
  className,
  color = "#525866",
}) => {
  return (
    <svg
      className={className || ""}
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.75 13.75V6.25H13.75V13.75H7.75ZM0.25 7.75V0.25H6.25V7.75H0.25ZM4.75 6.25V1.75H1.75V6.25H4.75ZM0.25 13.75V9.25H6.25V13.75H0.25ZM1.75 12.25H4.75V10.75H1.75V12.25ZM9.25 12.25H12.25V7.75H9.25V12.25ZM7.75 0.25H13.75V4.75H7.75V0.25ZM9.25 1.75V3.25H12.25V1.75H9.25Z"
        fill={color}
      />
    </svg>
  );
};

export default DashboardIcon;
