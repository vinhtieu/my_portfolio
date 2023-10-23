import React from "react";

const SLOGAN = `Building the Web, One Pixel at a Time: A Passionate Front-End Developer's Journey`;

export default function Home() {
  return (
    <div className="text-[200px] relative w-full h-[calc(100vh-96px)] ">
      <div className="absolute w-full h-2/4 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
        <span className="block text-center text-[140px] leading-[.9] mb-4">
          Front-end Developer
        </span>
        <span className=" text-center text-[28px] text-[#c3c3c4] font-thin block ">
          {SLOGAN}
        </span>
        <span className="mt-12 text-[25px] overflow-hidden relative transition-all duration-500 text-black origin-center hover:bg-transparent hover:scale-110 hover:text-white border border-solid border-black rounded-sm leading-loose px-4 py-1 before:-z-10 before:origin-left before:-left-3 before:transition-transform before:duration-500 before:scale-x-0 hover:before:scale-x-100 before:-skew-x-12  before:absolute before:top-0 before:rounded-sm before:content-'' before:w-[calc(100%+2rem)] before:h-full before:bg-black ">
          See my work
        </span>
      </div>
    </div>
  );
}
