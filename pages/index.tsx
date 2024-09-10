import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-green-600">Hello world!</h1>

      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        <span className="font-bold underline text-green-600">Read</span>{" "}
        <Link href="/posts/first-post">this page!</Link>
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
