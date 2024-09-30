import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import LoginButton from "../components/login.button";

export default function NavBar() {
  const { data: session } = useSession();
  // const { accessToken } = session;

  return (
    <nav className="bg-base-300">
      <div className="navbar flex-col md:flex-row max-w-screen-xl mx-auto p-4">
        <div className="flex-none md:flex-1">
          <Link href="/">
            {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          /> */}
            <span className="self-center text-2xl font-semibold">
              My Blog
            </span>
          </Link>
        </div>
        <div className="flex-none">
            <ul className="flex flex-col items-center md:flex-row gap-x-4">
              <li>
                <Link href="/" className="btn btn-ghost" aria-current="page">
                  Home
                </Link>
              </li>
              <LoginButton />
            </ul>
        </div>
      </div>
    </nav>
  );
}
