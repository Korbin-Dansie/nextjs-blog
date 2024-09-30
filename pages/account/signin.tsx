"use client";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken, signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserLoginViewModel } from "@/core/view.models/user.login.viewmodel";
import Link from "next/link";

export default function SignIn({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserLoginViewModel>();

  const onSubmit: SubmitHandler<UserLoginViewModel> = async (
    user: UserLoginViewModel
  ) => {
    // Hash the password
    console.log(user);
    // Send Data to API to register user
    const result = await signIn("Credentials", {
      email: user.email,
      password: user.password,
      redirect: true,
      callbackUrl: "/",
    });
    // Handle response if necessary
    // const data = await response.json();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="card bg-base-100 w-3/4 md:w-2/4 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold leading-7">Sign In</h2>
          <form
            onSubmit={handleSubmit((data) => {
              onSubmit(data);
            })}
          >
            <input
              {...register("csrfToken")}
              type="hidden"
              defaultValue={csrfToken}
            />
            <div className="space-y-12">
              <div className="pb-2">
                <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-4">
                  <div className="col-span-2">
                    <label htmlFor="email" className="label">
                      <span className="label-text">Email address</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      autoComplete="email"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="password"
                      className="label"
                    >
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      {...register("password")}
                      type="password"
                      autoComplete="current-password"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions mt-2">
              <button
                type="submit"
                className="btn btn-block btn-success"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Sign In"}
              </button>
            </div>
          </form>
          <hr className="my-6"></hr>
          <div>
            <p>
              Don't have an account yet?{" "}
              <Link href="/account/register" className="link link-info">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
