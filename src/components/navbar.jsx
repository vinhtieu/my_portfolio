import React from "react";

export default function Navbar() {
  return (
    <div className="leading-[80px] p-2 bg-[#f6f1eb] z-10 sticky top-0 right-0 left-0">
      <div className="relative flex items-center justify-between h-full cursor-pointer">
        <div className="space-x-8 ">
          <a
            className="p-2 text-lg relative before:transition-all before:duration-300 before:absolute duration-300 before:bottom-0 before:left-0 before:content-[''] before:w-[0%] before:h-1 before:bg-black hover:before:w-full "
            href="#about-page">
            ABOUT
          </a>
          <a
            className="p-2 text-lg relative before:transition-all before:duration-300 before:absolute  before:bottom-0 before:left-0 before:content-[''] before:w-0 before:h-1 before:bg-black hover:before:w-full"
            href="#work-page">
            WORK
          </a>
        </div>

        <a
          className="text-[30px] absolute right-1/2 translate-x-1/2"
          href="#home-page">
          VINH TIEU
        </a>

        <a
          className="p-2 text-lg relative before:transition-all before:duration-300  before:absolute before:bottom-0 before:left-0  before:content-[''] before:w-0 before:h-1 before:bg-black hover:before:w-full"
          href="#contact-page">
          CONTACT
        </a>
      </div>
    </div>
  );
}
