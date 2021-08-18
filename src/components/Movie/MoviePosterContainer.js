import React from "react";
import MoviePosterCardsGroup from "./MoviePosterCardsGroup";

export default function MoviePosterContainer({ moviePosterData }) {
  console.log(moviePosterData);
  return (
    <div>
      {moviePosterData.map((x) => (
        <MoviePosterCardsGroup
          property={x.property}
          name={x.name}
          id={x.id}
          heading={x.heading}
        />
      ))}
    </div>
  );
}
