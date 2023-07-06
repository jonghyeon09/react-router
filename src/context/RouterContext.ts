import { createContext } from "react";

interface ContextValue {
  path: string;
  changePath: (path: string) => void;
}

export const RouterContext = createContext<ContextValue | null>(null);
