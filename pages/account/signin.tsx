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
    console.log(result);
    // Handle response if necessary
    // const data = await response.json();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="card bg-base-100 w-3/4 md:w-2/4 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">Sign In</h2>
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
                <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-8">
                  <div className="col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("email")}
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("password")}
                        type="password"
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="btn btn-error">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Sign In"}
                </button>
              </div>
            </div>
          </form>
          <div>
            <p>Don't have an account yet? <Link href="/account/register" className="link link-info">Sign Up</Link></p>
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
