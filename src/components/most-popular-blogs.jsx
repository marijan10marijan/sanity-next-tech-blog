import React from "react";
import BlogCard from "./blog-card";
import Link from "next/link";

const MostPopularBlogs = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-lg font-semibold">No popular blogs found</p>;
  }

  return (
    <div className="mt-20">
      <h3 className="text-lg font-bold pb-6 text-chart-1 dark:text-chart-3">
        Popular Blogs
      </h3>

      <div className="grid grid-flow-col auto-cols-[73%]  sm:auto-cols-[62%] md:auto-cols-[39%] gap-2 overflow-x-scroll overscroll-x-contain snap-x snap-mandatory hide-scrollbar">
        {data.map(
          (blog) =>
            blog.isMostPopular && (
              <Link
                href={`/blog/${blog.slug}`}
                key={blog.title}
                className="border border-gray-300 rounded-md h-full relative  snap-start pb-2  overflow-hidden"
              >
                <BlogCard blog={blog} isPopularBlog={true} />
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default MostPopularBlogs;
