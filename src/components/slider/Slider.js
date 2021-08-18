import React, { useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slide from "./Slide";

export default function Slider({ slides }) {
  const sliderPosition = (direction) => {
    console.log(direction);
    const sliderContainer = document.querySelector(".slider-slide-wrapper");

    sliderContainer.style.animation = "none";

    const slider = document.querySelectorAll(".slider-slide");
    let sliderLen = slider.length,
      scrennWidth = window.innerWidth;
    let position;

    if (direction === "right") {
      if (
        Math.abs(sliderContainer.getBoundingClientRect().x) <
        (sliderLen - 1) * scrennWidth
      )
        position = sliderContainer.getBoundingClientRect().x - scrennWidth;
      else position = 0;

      sliderContainer.style.transform = `translate(${position}px)`;
    } else {
      if (sliderContainer.getBoundingClientRect().x >= sliderLen * scrennWidth)
        position = sliderContainer.getBoundingClientRect().x + scrennWidth;
      else position = 0;

      sliderContainer.style.transform = `translate(${position}px)`;
    }
    console.log(position / scrennWidth, position);
    setTimeout(() => {
      sliderContainer.style.animation = "slideshow 12s ease-in-out infinite";
    }, 6000);
  };
  return (
    <div className="slider-container">
      <button
        className="slider-left-btn slider-btn"
        id="slider-left-btn"
        data-direction="left"
        onClick={() => sliderPosition("left")}
      >
        <FaArrowLeft />
      </button>
      <div className="slider-slide-wrapper">
        {slides.content !== undefined &&
          slides.map((slide, index) => (
            <Slide
              index={index + 1}
              icon={slide.icon}
              content={slide.content}
              link={slide.link}
            />
          ))}
        {/* {slides.img.map((x) => (
          <Slide img={x[1]} alt={x[0]} />
        ))} */}
      </div>
      <button
        type="button"
        className="slider-right-btn slider-btn"
        id="slider-right-btn"
        data-direction="right"
        onClick={() => sliderPosition("right")}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
