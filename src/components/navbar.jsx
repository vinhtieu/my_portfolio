import React from "react";

export default function Navbar() {
  return (
    <div className="leading-[80px] p-2 ">
      <div className="relative flex items-center justify-between h-full cursor-pointer">
        <div className="space-x-8 ">
          <span className="text-lg">ABOUT</span>
          <span className="text-lg">WORK</span>
        </div>
        <span className="text-[30px] absolute right-1/2 translate-x-1/2">
          VINH TIEU
        </span>
        <span className="text-lg ">CONTACT</span>
      </div>
    </div>
  );
}
