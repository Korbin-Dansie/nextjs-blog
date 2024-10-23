import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Blog } from "@/core/models/blog";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Blog>();

  const onSubmit: SubmitHandler<Blog> = async (blog: Blog) => {
    // Send Data to API to create a new blog post
    const response = await fetch("/api/blogs/create", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    // Redirect to home page when done
    window.location.href = "/";
  };

  return (
    <div className="flex items-center justify-center">
      <div className="card bg-base-100 w-3/4 md:w-2/4 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-3xl font-bold leading-7">
            Create post
          </h1>
          <form
            onSubmit={handleSubmit((data) => {
              onSubmit(data);
            })}
          >
            <div className="space-y-12">
              <div className="pb-2">
                <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-4">
                  <div className="col-span-2">
                    <label htmlFor="title" className="label">
                      <span className="label-text">Title</span>
                    </label>
                    <input
                      {...register("title")}
                      type="text"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="Body" className="label">
                      <span className="label-text">Body</span>
                    </label>
                    <textarea {...register("body", {})} className="textarea textarea-bordered w-full"/>
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
                {isSubmitting ? "Submitting..." : "Post"}
              </button>
            </div>
          </form>
        </div>
        {/* End of Card Body */}
      </div>
    </div>
  );
}
