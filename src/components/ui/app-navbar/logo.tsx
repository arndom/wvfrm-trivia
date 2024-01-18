"use client";
import { PaletteMode } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ mode }: { mode: PaletteMode }) => (
  <Link
    href="/"
    style={{
      outline: "none",
      WebkitTapHighlightColor: "transparent",
    }}
  >
    <Image
      src={mode === "dark" ? "/logo-dark.webp" : "/logo-light.webp"}
      width={35}
      height={35}
      className="logo"
      alt="logo"
    />
  </Link>
);
