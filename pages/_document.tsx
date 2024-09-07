import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "./navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <NavBar />
        <div className="max-w-screen-xl mx-auto p-4">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
