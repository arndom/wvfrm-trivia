"use client";

import { SvgIcon, SvgIconProps } from "@mui/material";

export default function PlusIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="9"
        height="8"
        viewBox="0 0 9 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_85_5637)">
          <g>
            <path d="M4.36851 0.35083V7.99995V0.35083Z" fill="#111111" />
            <path
              d="M4.36851 0.35083V7.99995M8.19307 4.05587H0.543945"
              stroke="#111111"
              strokeWidth="1.27485"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_85_5637">
            <rect
              width="7.64912"
              height="7.64912"
              fill="white"
              transform="translate(0.543945 0.35083)"
            />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
}
