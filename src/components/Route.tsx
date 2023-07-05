import { useContext } from "react";
import { RouterContext } from "../context/RouterContext";

interface Props {
  path: string;
  component: JSX.Element;
}

function Route({ path, component }: Props) {
  const router = useContext(RouterContext);

  return router?.path === path ? component : null;
}

export default Route;
