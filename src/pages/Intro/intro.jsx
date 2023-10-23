import React from "react";

export default function Intro(props) {
  return (
    <div
      className={`flex items-center justify-center w-full h-full delay-150 z-0 transition-all absolute top-0 bottom-0 right-0 left-0`}>
      <div className="text-5xl">
        <p>
          <span className="animate-fadeIn animation-delay-500 font-neue-regular">
            VINH TIEU
          </span>
          &nbsp;
          <span className="animate-fadeIn animation-delay-1100 font-neue-thin">
            Portfolio
          </span>
        </p>
      </div>
    </div>
  );
}
