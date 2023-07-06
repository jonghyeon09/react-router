import useRouter from "../hooks/useRouter";

export default function Root() {
  const { push } = useRouter();

  return (
    <>
      <h1>root</h1>
      <button onClick={() => push("/about")}>
        <h1>about</h1>
      </button>
    </>
  );
}
