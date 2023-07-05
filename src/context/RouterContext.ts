import { createContext } from "react";

interface ContextValue {
  path: string;
  changePath: React.Dispatch<React.SetStateAction<string>>;
}

export const RouterContext = createContext<ContextValue | null>(null);
