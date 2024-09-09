import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import LoginButton from "../components/login.button";

export default function NavBar() {
  const { data: session } = useSession();
  // const { accessToken } = session;

  return (
    <nav className="bg-blue-300 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            My Blog
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-inherit dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black bg-black rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <LoginButton />
            </li>
            <li>{session ? <SignOut /> : <SignIn />}</li>
            <li>
              <SignOut />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function SignOut() {
  return (
    <button
      onClick={() => signOut()}
      className="block py-2 px-3 text-black bg-black rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-white"
    >
      Sign out
    </button>
  );
}

function SignIn() {
  return (
    // <Link
    //   href="/api/auth/signIn"
    //   className="block py-2 px-3 text-black bg-black rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-white"
    //   aria-current="page"
    // >
    //   Signin / Register
    // </Link>
    <button
      onClick={() => signIn()}
      className="block py-2 px-3 text-black bg-black rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-white"
    >
      Signin / Register
    </button>
  );
}
