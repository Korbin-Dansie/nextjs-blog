import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <span>Hello <b>{session.user?.firstName}</b> <SignOut /></span>
      </>
    );
  }
  return <SignIn/ >;
}

function SignOut() {
  return (
    <button
      onClick={() => signOut()}
      className="py-2 px-3 text-black bg-black rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-white"
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
