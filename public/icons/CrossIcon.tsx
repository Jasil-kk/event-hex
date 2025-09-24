import React from "react";

interface CrossIconProps {
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const CrossIcon: React.FC<CrossIconProps> = ({
  width = "11",
  height = "11",
  className,
  color = "#375DFB",
}) => {
  return (
    <svg
      className={className || ""}
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 4.43951L9.21251 0.727005L10.273 1.78751L6.5605 5.5L10.273 9.21251L9.21251 10.273L5.5 6.5605L1.78751 10.273L0.727005 9.21251L4.43951 5.5L0.727005 1.78751L1.78751 0.727005L5.5 4.43951Z"
        fill={color}
      />
    </svg>
  );
};

export default CrossIcon;
