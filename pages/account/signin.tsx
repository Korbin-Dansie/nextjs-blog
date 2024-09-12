"use client"
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken, signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserLoginViewModel } from "@/core/view.models/user.login.viewmodel";

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
    const result = await signIn("Credentials", { email: user.email, password: user.password, redirect: true, callbackUrl: "/"  });
    console.log(result);
    // Handle response if necessary
    // const data = await response.json();
  };

  return (
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
      <label>
        Username
        <input {...register("email")} type="text" />
      </label>
      <label>
        Password
        <input {...register("password")} type="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
