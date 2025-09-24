import React from "react";

interface SortIconProps {
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const SortIcon: React.FC<SortIconProps> = ({
  width = "12",
  height = "13",
  className,
  color = "#525866",
}) => {
  return (
    <svg
      className={className || ""}
      width={width}
      height={height}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1.59999H11.4C11.5591 1.59999 11.7117 1.66321 11.8243 1.77573C11.9368 1.88825 12 2.04086 12 2.19999V11.8C12 11.9591 11.9368 12.1117 11.8243 12.2243C11.7117 12.3368 11.5591 12.4 11.4 12.4H0.6C0.44087 12.4 0.288258 12.3368 0.175736 12.2243C0.0632141 12.1117 0 11.9591 0 11.8V2.19999C0 2.04086 0.0632141 1.88825 0.175736 1.77573C0.288258 1.66321 0.44087 1.59999 0.6 1.59999H3V0.399994H4.2V1.59999H7.8V0.399994H9V1.59999ZM7.8 2.79999H4.2V3.99999H3V2.79999H1.2V5.19999H10.8V2.79999H9V3.99999H7.8V2.79999ZM10.8 6.39999H1.2V11.2H10.8V6.39999Z"
        fill={color}
      />
    </svg>
  );
};

export default SortIcon;
