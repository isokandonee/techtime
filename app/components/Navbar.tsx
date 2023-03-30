import Link from "next/link";
import styles from "../page.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__title}>Site Title</div>
      <ul className={styles.navbar__navigation}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <button className={styles.button}>
            <Link href="/contact">Click Me</Link>
          </button>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
