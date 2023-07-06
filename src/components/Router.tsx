import { useEffect, useState } from "react";
import { RouterContext } from "../context/RouterContext";

interface Props {
  children: React.ReactNode;
}

function Router({ children }: Props) {
  const [path, setPath] = useState(location.pathname);

  const changePath = (path: string) => {
    setPath(path);
    history.pushState("", "", path);
  };
  const contextValue = {
    path,
    changePath,
  };

  useEffect(() => {
    const handleOnpopstate = () => setPath(location.pathname);

    window.addEventListener("popstate", handleOnpopstate);

    return () => {
      window.removeEventListener("popstate", handleOnpopstate);
    };
  }, []);

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
}

export default Router;
