import { BookCopy } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center mx-auto px-4 text-center pb-8 pt-12">
      <div className="flex gap-4 sm:gap-6 justify-center text-slate-500 dark:text-slate-300">
        <BookCopy width={40} height={40} />
        <ul className="flex text-sm  gap-x-4 gap-y-1 flex-wrap font-semibold  justify-center">
          <li>Terms of Use</li>
          <li>Privacy & Cookie Policy</li>
          <li>Privacy & Cookie Setting</li>
        </ul>
      </div>
      <p className="mt-4 mb-4 text-foreground text-sm font-semibold">
        © {new Date().getFullYear()} Tech daily. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
