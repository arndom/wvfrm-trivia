"use client";

import { SvgIcon, SvgIconProps } from "@mui/material";

export default function InfoIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="ic:outline-info">
          <path
            id="Vector"
            d="M9.16663 6.2946H10.8333V7.96126H9.16663V6.2946ZM9.16663 9.62793H10.8333V14.6279H9.16663V9.62793ZM9.99996 2.12793C5.39996 2.12793 1.66663 5.86126 1.66663 10.4613C1.66663 15.0613 5.39996 18.7946 9.99996 18.7946C14.6 18.7946 18.3333 15.0613 18.3333 10.4613C18.3333 5.86126 14.6 2.12793 9.99996 2.12793ZM9.99996 17.1279C6.32496 17.1279 3.33329 14.1363 3.33329 10.4613C3.33329 6.78626 6.32496 3.7946 9.99996 3.7946C13.675 3.7946 16.6666 6.78626 16.6666 10.4613C16.6666 14.1363 13.675 17.1279 9.99996 17.1279Z"
            fill="#FCFCFA"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}
