import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "@/lib/sanity";

const BlogCard = ({ blog, isPopularBlog }) => {
  const imageUrl = blog.image ? urlFor(blog.image).url() : null;

  return (
    <>
      {isPopularBlog ? (
        <div
          href={`/blog/${blog.slug}`}
          className="flex-col gap-4 pt-0  sm:items-start"
        >
          <div className="h-28 sm:h-40 relative overflow-hidden ">
            {imageUrl ? (
              <Image
                className="w-full absolute top-0 left-0 object-cover aspect-video"
                src={imageUrl}
                alt={blog.title}
                sizes="100%"
                fill={true}
                priority={true}
              />
            ) : (
              <div className="w-full h-full bg-gray-600 flex absolute top-0 left-0 items-center justify-center"></div>
            )}
          </div>
          <div className="pt-4 pb-0 px-2  flex flex-col gap-4 sm:flex-auto md:min-h-[180px]">
            <h2 className="text-xl font-bold font-serif leading-6 line-clamp-2">
              {blog.title}
            </h2>
            <p className="font-sans text-sm sm:text-balance text-slate-800 dark:text-slate-300 line-clamp-3">
              {blog.desc}
            </p>
            <div className="mt-auto">
              <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                }).format(new Date(blog._createdAt))}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Link
          href={`/blog/${blog.slug}`}
          className="flex sm:flex-col gap-2 overflow-hidden items-center sm:items-start shadow-sm  shadow-gray-600 rounded-md"
        >
          <div className="flex-1 sm:flex-auto w-full h-full sm:h-40 relative overflow-hidden">
            {imageUrl ? (
              <Image
                className="w-full absolute top-0 left-0 object-cover aspect-video"
                src={imageUrl}
                alt={blog.title}
                sizes="100%"
                fill={true}
                priority={true}
              />
            ) : (
              <div className="w-full h-full bg-gray-600 flex absolute top-0 left-0 items-center justify-center"></div>
            )}
          </div>
          <div className="py-4 px-2  flex flex-col gap-4 flex-1 sm:flex-auto justify-between md:min-h-[200px]">
            <h2 className="text-xl font-bold font-serif leading-6 line-clamp-2">
              {blog.title}
            </h2>
            <p className="font-sans text-sm sm:text-balance text-slate-800 dark:text-slate-300 line-clamp-3">
              {blog.desc}
            </p>

            <button className="underline font-semibold text-start sm:hidden">
              Read more
            </button>

            <div className="mt-auto">
              <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                }).format(new Date(blog._createdAt))}
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default BlogCard;
