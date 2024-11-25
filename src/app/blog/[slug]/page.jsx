import React from "react";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import customComponents from "@/components/customComponent";
import Image from "next/image";
import { renderStars } from "@/components/ratings";
import Link from "next/link";

async function getBlogData(slug) {
  const query = `
    *[_type == "blog" && slug.current == $slug][0] {
      title,
      desc,
      "image": titleImage.asset._ref,
      rating,
      _createdAt,
      "author": author->name,
      content
    }
  `;
  try {
    const data = await client.fetch(query, { slug });
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

const SingleBlogPage = async ({ params }) => {
  const { slug } = params;
  const blog = await getBlogData(slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold mb-10">{blog.title}</h2>
      <div className="max-w-[520px] w-full  h-40 sm:h-52 relative my-6">
        <Image
          className="w-full h-full absolute top-0 left-0 object-cover aspect-video"
          src={urlFor(blog.image).url()}
          alt={blog.title}
          sizes="100%"
          fill={true}
          priority={true}
        />
      </div>
      <PortableText value={blog.content} components={customComponents} />
      <div className="my-4 sm:py-6">Ratings: {renderStars(blog.rating)}</div>
      <div className="mt-10 flex items-center justify-between flex-wrap gap-2">
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 ">
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          }).format(new Date(blog._createdAt))}
        </p>

        {blog.author ? (
          <div className="flex flex-col gap-1 ">
            <h4 className="text-sm font-semibold">Author:</h4>
            <p className="font-bold text-lg">{blog.author}</p>
          </div>
        ) : null}
      </div>
      <Link
        className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-gradient-to-tr hover:from-indigo-700 hover:to-purple-800 w-fit transition duration-200"
        href="/"
      >
        Back to all blogs
      </Link>
    </div>
  );
};

export default SingleBlogPage;

export const revalidate = 604800;
