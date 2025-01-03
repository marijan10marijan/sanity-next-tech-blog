import React from "react";
import BlogCard from "./blog-card";
import { Star } from "lucide-react";
import Link from "next/link";

const BestRated = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-lg font-semibold">No best rated blogs found</p>;
  }

  return (
    <div className="mt-20">
      <h3 className="text-lg font-bold pb-6 text-chart-4 dark:text-[hsl(43_74%_66%)] flex items-center gap-1">
        5{" "}
        <span>
          <Star fill=" hsl(43 74% 66%)" />
        </span>{" "}
        blogs
      </h3>

      <div className="grid grid-flow-col auto-cols-[73%]  sm:auto-cols-[62%] md:auto-cols-[39%] gap-2 overflow-x-scroll overscroll-x-contain snap-x snap-mandatory hide-scrollbar">
        {data.reverse().map(
          (blog) =>
            blog.rating === 5 && (
              <Link
                href={`/blog/${blog.slug}`}
                key={blog.title}
                className="border border-gray-300 rounded-md h-full relative  snap-start pb-2 overflow-hidden"
              >
                <BlogCard blog={blog} isPopularBlog={true} />
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default BestRated;
