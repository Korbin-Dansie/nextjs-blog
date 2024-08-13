import { FormEvent } from "react";

export default function Page() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/users/Create", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Sign Up
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>

      <input type="text" name="hashedPassword" />
      <input type="text" name="salt" />

      <button type="submit">Submit</button>
    </form>
  );
}
