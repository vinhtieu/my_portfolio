import React from "react";
import "./animation.css";

export default function Intro() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="text-5xl">
        {/* <span className="animate-animated animate__fadeOut font-neue-regular">
          VINH TIEU
        </span> */}
        <p>
          <span className="animate_fadeIn font-neue-regular">VINH TIEU</span>
          &nbsp;
          <span className=" font-neue-thin">Portfolio</span>
        </p>
      </div>
    </div>
  );
}
