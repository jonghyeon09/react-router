import useRouter from "../hooks/useRouter";

export default function About() {
  const { push } = useRouter();

  return (
    <>
      <h1>about</h1>
      <button onClick={() => push("/")}>
        <h1>go main</h1>
      </button>
    </>
  );
}
