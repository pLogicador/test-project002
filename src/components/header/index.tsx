import Link from "next/link";
import styles from "@/components/header/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Header to Website</h1>
      <Link href="/">Return to Home</Link>
      <br />
      <Link href="/contact">Redirect to Contact</Link>
      <br />
      <Link href="/repositories">Redirect to Repositories</Link>
      <br />
      <br /> <hr />
    </header>
  );
}
