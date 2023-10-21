import React from "react";

export default function Navbar() {
  return (
    <div className="leading-[80px] p-2 bg-[#f6f1eb] z-10 sticky top-0 right-0 left-0">
      <div className="relative flex items-center justify-between h-full cursor-pointer">
        <div className="space-x-8 ">
          <a className="p-2 text-lg" href="#about-page">
            ABOUT
          </a>
          <a className="p-2 text-lg" href="#work-page">
            WORK
          </a>
        </div>

        <a
          className="text-[30px] absolute right-1/2 translate-x-1/2"
          href="#home-page">
          VINH TIEU
        </a>

        <a className="p-2 text-lg " href="#contact-page">
          CONTACT
        </a>
      </div>
    </div>
  );
}
