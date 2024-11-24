import BestRated from "@/components/best-rated";
import BlogCard from "@/components/blog-card";
import MostPopularBlogs from "@/components/most-popular-blogs";
import { client } from "@/lib/sanity";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    desc,
    "image": titleImage.asset._ref,
    'slug': slug.current,
    _createdAt,
    rating,
    isMostPopular
  } 
     `;
  try {
    const data = await client.fetch(query);
    return data;
  } catch (err) {
    return console.error(err);
  }
}

export default async function Home({}) {
  const data = await getData();

  return (
    <div className="w-full ">
      <h1 className="text-4xl font-serif font-bold shadow-sm text-center w-3/4 mx-auto mb-24 sm:w-[360px]">
        <span className="block text-chart-1 dark:text-chart-3  mb-2">
          Knowladge
        </span>{" "}
        is Power - Unlock Yours with{" "}
        <span className="bg-primary p-1 text-white ">Our</span> Blog
      </h1>

      <p className="mb-4 font-semibold text-lg">Most recent blogs </p>
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-4">
        {data.slice(0, 8).map((blog) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>

      <MostPopularBlogs data={data} />
      <BestRated data={data} />
    </div>
  );
}

export const revalidate = 604800;
