import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
      <Image
        src="/images/dragon_red.png" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />

      <ul>
        <li>
          <Link href="/users/GetAll">Users - Get All</Link>
        </li>
        <li>
          <Link href="/users/Create">Users - Create</Link>
        </li>
      </ul>
    </>
  );
}
