import { useCallback, useContext } from "react";
import { RouterContext } from "../context/RouterContext";

const useRouter = () => {
  const router = useContext(RouterContext);

  const push = useCallback(
    (nextPath: string) => {
      if (router?.path === nextPath) return;

      router?.changePath(nextPath);
    },
    [router]
  );

  return { push };
};

export default useRouter;
