import { useSession, signIn, signOut, } from "next-auth/react";
import Link from "next/link";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <li>
          <span>
            Hello <b>{session.user?.firstName}</b>
          </span>
        </li>
        <li>
          <SignOut />
        </li>
      </>
    );
  }
  return <SignIn />;
}

function SignOut() {
  return (
    <button onClick={() => signOut()} className="btn btn-active btn-ghost">
      Sign out
    </button>
  );
}

function SignIn() {
  return (
    <>
      <li>
        <Link href="/account/register" className="btn btn-ghost">
          Register
        </Link>
      </li>
      <li>
        <button onClick={() => signIn()} className="btn btn-primary">
          Signin
        </button>
      </li>
    </>
  );
}
