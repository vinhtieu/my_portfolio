import React from "react";

export default function Intro(props) {
  return (
    <div
      className={`flex items-center justify-center w-full h-full z-0 transition-all ${props.position}`}>
      <div className="text-5xl">
        {/* <span className="animate-animated animate__fadeOut font-neue-regular">
          VINH TIEU
        </span> */}
        <p>
          <span className="animate-fadeIn font-neue-regular">VINH TIEU</span>
          &nbsp;
          <span className=" font-neue-thin">Portfolio</span>
        </p>
      </div>
    </div>
  );
}
