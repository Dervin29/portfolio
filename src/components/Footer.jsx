import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center px-4 md:px-8 border-t-[1px]  border-slate-600 ">
      <div className="my-2 flex gap-4">
        <a
          className="text-sm md:text-lg text-slate-400 hover:text-blue-600"
          href="https://github.com/Dervin29"
        >
          GitHub
        </a>
        <a
          className="text-sm md:text-lg text-slate-400 hover:text-blue-600"
          href="https://www.linkedin.com/in/alanderwin29/"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Footer;
