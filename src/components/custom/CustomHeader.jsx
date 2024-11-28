import React from "react";
import { cn } from "@/lib/utils";

const CustomHeader = ({ header1, header2, className }) => {
  return (
    <div className="hed flex justify-center items-center">
      <h1
        data-after={header2}
        className={cn(
          `w-fit after:content-[attr(data-after)] after:block lg:after:text-9xl md:after:text-8xl sm:after:text-7xl after:text-6xl after:font-bold lg:text-3xl md:text-2xl sm:text-xl text-lg relative after:absolute after:bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:tracking-wider after:text-[#FF590026] before:h-1 before:w-[50%] before:block before:absolute before:-bottom-1 before:bg-[#ff5900] before:rounded-full mb-5 after:font-sans heading2-bold `,
          className
        )}
      >
        {/*  before:h-1 before:w-[50%] before:block before:absolute before:-bottom-1 before:-left-3 before:bg-[#ff5900] */}
        {header1}
      </h1>
    </div>
  );
};

export default CustomHeader;
