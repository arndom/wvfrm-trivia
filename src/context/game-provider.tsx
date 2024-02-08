"use client";

import { handleAnonSignIn } from "@/utils/firebase";
import { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux";

interface Props {
  children: ReactNode;
}

export const GameProvider = (props: Props) => {
  useEffect(() => {
    handleAnonSignIn();
  }, []);

  return <Provider store={store}>{props.children}</Provider>;
};
