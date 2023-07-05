import { useContext } from "react";
import { RouterContext } from "../context/RouterContext";

interface Props {
  to: string;
  children: React.ReactNode;
}

function Link({ to, children }: Props) {
  const router = useContext(RouterContext);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router?.changePath(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
