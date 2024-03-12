import Image from "next/image";
import styles from "../page.module.css";
import Link from 'next/link'

export default function Blog() {
  return (
    <main className={styles.main}>

      <div className={styles.description}>
        <h2>
          <Link className={styles.card} href="../">Home</Link>
        </h2>
      </div>

      <div className={styles.description} >
        <div>
          <h3>
            This is our blog about next.js course
          </h3>
          <p>
            Layouts
            A layout is UI that is shared between multiple routes. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.
            You can define a layout by default exporting a React component from a layout.js file. The component should accept a children prop that will be populated with a child layout (if it exists) or a page during rendering.
          </p>
        </div>

      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </main>
  );
}
