"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux";

interface Props {
  children: ReactNode;
}

export const GameProvider = (props: Props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
