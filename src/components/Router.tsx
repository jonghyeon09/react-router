import { useMemo, useState } from "react";
import { RouterContext } from "../context/RouterContext";

interface Props {
  children: React.ReactNode;
}

function Router({ children }: Props) {
  const [path, setPath] = useState(location.pathname);

  const contextValue = useMemo(() => {
    return {
      path: path,
      changePath: setPath,
    };
  }, [path]);

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
}

export default Router;
