import Link from "../components/Link";

export default function Root() {
  return (
    <>
      <h1>Root</h1>
      <h1>
        <Link to="/about">About</Link>
      </h1>
    </>
  );
}
