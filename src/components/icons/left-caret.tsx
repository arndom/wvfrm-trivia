"use client";

import { SvgIcon, SvgIconProps } from "@mui/material";

export default function LeftCaretIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="ion:caret-back-outline">
          <path
            id="Vector"
            d="M18.8637 5.74209L9.30587 13.9323C9.15189 14.0643 9.02829 14.2281 8.94355 14.4124C8.85882 14.5967 8.81494 14.7971 8.81494 14.9999C8.81494 15.2027 8.85882 15.4032 8.94355 15.5874C9.02829 15.7717 9.15189 15.9355 9.30587 16.0675L18.8637 24.2577C19.776 25.0394 21.1852 24.3913 21.1852 23.1901V6.80733C21.1852 5.60615 19.776 4.95811 18.8637 5.74209Z"
            fill="#E5202B"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}
