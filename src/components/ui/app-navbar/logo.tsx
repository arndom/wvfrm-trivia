"use client";
import { Theme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ theme }: { theme: Theme; }) => (
  <Link href="/">
    <Image
      src={theme.palette.mode === "dark" ? "/logo-dark.webp" : "/logo-light.webp"}
      width={35}
      height={35}
      className="logo"
      alt="logo" />
  </Link>
);
