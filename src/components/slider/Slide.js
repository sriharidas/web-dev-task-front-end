import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

function Slide({ icon, content, link, index }) {
  return (
    <div className="slider-slide" data-index={index}>
      <div className="slide-wrapper">
        <span className="slide-icon">{icon}</span>
        <h3 className="slide-content">{content}</h3>
        <button className="slide-btn">
          {link} <IoMdArrowDropright />
        </button>
      </div>
    </div>
  );
}

export default Slide;
