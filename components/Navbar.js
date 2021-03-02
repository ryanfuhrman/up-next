import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>Up Next</h1>
      <ul>
        <li>
          <Link href="/lists">
            <a>Lists</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Account</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
