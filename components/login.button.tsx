import { Session } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

import { CgProfile } from "react-icons/cg";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return <SignOut session={session} />;
  }
  return <SignIn />;
}

function SignOut({ session }: { session: Session }) {
  return (
    <>
      <li>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
          <CgProfile />
          Hi, {session.user?.firstName}
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-1 w-52 p-2 shadow"
          >
            <li>
              <button onClick={() => signOut()} className="">
                <span>Sign out</span>
              </button>
            </li>
          </ul>
        </div>
      </li>
      <li></li>
    </>
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
        <button onClick={() => signIn()} className="btn btn-accent">
          Signin
        </button>
      </li>
    </>
  );
}
