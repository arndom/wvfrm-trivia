"use client";

import { Game, init } from "@/models/game";
import { handleAnonSignIn } from "@/utils/firebase";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

interface Props {
  children: ReactNode;
}

const GameContext = createContext<Game>(init);

export const GameProvider = (props: Props) => {
  const [game] = useState(init);

  useEffect(() => {
    handleAnonSignIn();
  }, []);

  return (
    <GameContext.Provider value={game}>{props.children}</GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
