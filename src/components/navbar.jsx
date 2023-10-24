import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSectionState } from "../redux/features/navbar/navbarSlice";

export default function Navbar() {
  const navbarSections = useSelector((state) => state.navbar.sections);
  const dispatch = useDispatch();

  const normalStyle =
    "p-2 font-neue-regular text-lg relative before:transition-all before:duration-300 before:absolute duration-300 before:bottom-0 before:left-0 before:content-[''] before:w-[0%] before:h-1 before:bg-black hover:before:w-full ";
  const activeStyle =
    "p-2 font-neue-regular text-lg relative before:transition-all before:duration-300 before:absolute duration-300 before:bottom-0 before:left-0 before:content-[''] before:w-full before:h-1 before:bg-black ";

  return (
    <div className="leading-[80px] p-2 bg-[#f6f1eb] z-10 sticky top-0 right-0 left-0">
      <div className="relative flex items-center justify-between h-full cursor-pointer">
        <div className="space-x-8 ">
          <a
            className={navbarSections.about.active ? activeStyle : normalStyle}
            data-section="about"
            onClick={(e) => {
              dispatch(setSectionState(e.target.dataset.section));
            }}
            href="#about-page">
            ABOUT
          </a>
          <a
            className={navbarSections.work.active ? activeStyle : normalStyle}
            data-section="work"
            onClick={(e) => {
              dispatch(setSectionState(e.target.dataset.section));
            }}
            href="#work-page">
            WORK
          </a>
        </div>

        <a
          className="text-[30px] font-intrepid absolute right-1/2 translate-x-1/2"
          href="#home-page"
          data-section="home"
          onClick={(e) => {
            dispatch(setSectionState(e.target.dataset.section));
          }}>
          VINH TIEU
        </a>

        <a
          className={navbarSections.contact.active ? activeStyle : normalStyle}
          data-section="contact"
          onClick={(e) => {
            dispatch(setSectionState(e.target.dataset.section));
          }}
          href="#contact-page">
          CONTACT
        </a>
      </div>
    </div>
  );
}
