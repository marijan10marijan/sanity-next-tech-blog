import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { BookCopy } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-8 ">
      <Link
        href={"/"}
        className="font-bold text-2xl sm:text-3xl flex items-center"
      >
        Tech
        <span>
          <BookCopy />
        </span>{" "}
        <span className="text-primary font-serif">daily</span>
      </Link>

      <ModeToggle />
    </nav>
  );
};

export default Navbar;
