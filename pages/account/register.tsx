import { useForm, SubmitHandler } from "react-hook-form";
import { UserRegisterViewModel } from "@/core/view.models/user.register.viewmodel";
import { cryptPassword } from "../../services/encryption";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserRegisterViewModel>();

  const onSubmit: SubmitHandler<UserRegisterViewModel> = async (
    user: UserRegisterViewModel
  ) => {
    // Hash the password
    let hashWord = await cryptPassword(user.password);
    user.password = hashWord;

    // Send Data to API to register user
    const response = await fetch("/api/users/Create", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    // Redirect to login page if not authenticated
    window.location.href = "/account/signin";
    // Handle response if necessary
    // const data = await response.json();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="card bg-base-100 w-3/4 md:w-2/4 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-3xl font-bold leading-7">
            Create account
          </h1>
          <form
            onSubmit={handleSubmit((data) => {
              onSubmit(data);
            })}
          >
            <div className="space-y-12">
              <div className="pb-2">
                <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-4">
                  <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="firstName" className="label">
                      <span className="label-text">First name</span>
                    </label>
                      <input
                        {...register("firstName")}
                        type="text"
                        autoComplete="given-name"
                        className="input input-bordered w-full"
                      />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="lastName" className="label">
                      <span className="label-text">Last name</span>
                    </label>
                      <input
                        {...register("lastName")}
                        type="text"
                        autoComplete="family-name"
                        className="input input-bordered w-full"
                      />
                  </div>

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
                    <label htmlFor="password" className="label">
                      <span className="label-text">Password</span>
                    </label>
                      <input
                        {...register("password")}
                        type="password"
                        autoComplete="new-password"
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
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </button>
            </div>
          </form>
          <hr className="my-6"></hr>
          <div>
            <p>
              Already have an account?{" "}
              <Link href="/account/signin" className="link link-info">
                Sign In
              </Link>
            </p>
          </div>
        </div>
        {/* End of Card Body */}
      </div>
    </div>
  );
}
