import React from "react";

interface PlayIconProps {
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const PlayIcon: React.FC<PlayIconProps> = ({
  width = "9",
  height = "13",
  className,
  color = "#ffffff",
}) => {
  return (
    <svg
      className={className || ""}
      width={width}
      height={height}
      viewBox="0 0 9 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.532 6.81201L0.58275 12.1115C0.526279 12.1491 0.460673 12.1706 0.392919 12.1739C0.325164 12.1771 0.2578 12.1619 0.197999 12.1299C0.138199 12.0979 0.0882027 12.0503 0.0533352 11.9921C0.0184677 11.9339 3.50403e-05 11.8673 0 11.7995V1.20051C3.50403e-05 1.13267 0.0184677 1.06612 0.0533352 1.00794C0.0882027 0.949754 0.138199 0.902116 0.197999 0.8701C0.2578 0.838083 0.325164 0.822886 0.392919 0.826127C0.460673 0.829368 0.526279 0.850927 0.58275 0.888505L8.532 6.188C8.58336 6.22225 8.62547 6.26865 8.6546 6.32307C8.68372 6.3775 8.69896 6.43828 8.69896 6.5C8.69896 6.56173 8.68372 6.62251 8.6546 6.67694C8.62547 6.73136 8.58336 6.77776 8.532 6.81201Z"
        fill={color}
      />
    </svg>
  );
};

export default PlayIcon;
