import { useForm, SubmitHandler } from "react-hook-form";
import { UserRegisterViewModel } from "@/core/view.models/user.register.viewmodel";
import { cryptPassword } from "../../services/encryption";
import { useRouter } from 'next/router'

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
          <h2 className="card-title text-primary">Sign Up</h2>
          <form
            onSubmit={handleSubmit((data) => {
              onSubmit(data);
            })}
          >
            <div className="space-y-12">
              <div className="pb-2">
                <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-8">
                  <div className="col-span-2 lg:col-span-1">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("firstName")}
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("lastName")}
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

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
                        autoComplete="new-password"
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
                  {isSubmitting ? "Submitting..." : "Sign Up"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
