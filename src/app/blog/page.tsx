import Image from "next/image";
import styles from ".././page.module.css";

export default function Blog() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          This is our blog about next.js course
        </p>
        <p>
          Here you can send your questions
        </p>
        <p>
          Here is support
        </p>
        </div>
    </main>
  );
}
