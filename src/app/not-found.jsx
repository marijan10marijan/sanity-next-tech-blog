// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col  justify-center h-[calc(100vh-340px)]">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-500">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-gradient-to-tr hover:from-indigo-700 hover:to-purple-800 w-fit transition duration-200"
        href="/"
      >
        Go back home
      </Link>
    </div>
  );
}
