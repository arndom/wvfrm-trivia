"use client";
import { PaletteMode } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ mode }: { mode: PaletteMode; }) => (
  <Link href="/">
    <Image
      src={mode === "dark" ? "/logo-dark.webp" : "/logo-light.webp"}
      width={35}
      height={35}
      className="logo"
      alt="logo" />
  </Link>
);
