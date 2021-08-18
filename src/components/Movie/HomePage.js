import React from "react";
import Slider from "../slider/Slider";
import MoviePosterContainer from "./MoviePosterContainer";

export default function HomePage({ props }) {
  console.log(props);
  return (
    <>
      <Slider slides={props.slides} />
      <MoviePosterContainer moviePosterData={props.moviePosterData} />
    </>
  );
}
