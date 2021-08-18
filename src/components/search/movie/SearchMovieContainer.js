import React, { useState, useEffect } from "react";
import SearchMovieHeader from "./SearchMovieHeader";

export default function SearchMovieContainer(props) {
  const [movieData, setMovieData] = useState({});
  const [videoClip, setVideoClip] = useState({});
  useEffect(() => {
    const MovieData = async () => {
      const resp = await fetch(
        `http://127.0.0.1:5000/movie/info/${props.location.state.detail}`
      );
      const response = await resp.json();
      console.log(response);
      setMovieData(response);
    };
    MovieData();
    console.log(props.location.state);
  }, []);
  useEffect(() => {
    if (Object.keys(movieData).length <= 0) return;
    movieData["video clips and trailers"] !== undefined &&
      movieData["video clips and trailers"].forEach((mov) => {
        if (mov[0].toLowerCase().includes("youtube")) {
          console.log("trailer", mov[1].replace("https://www.imdb.com/", ""));
          setVideoClip({
            trailer: mov[1]
              .replace("https://www.imdb.com/", "")
              .replace("watch?v=", "embed/"),
          });
        }
      });
    console.log();
  }, [movieData]);
  return (
    <div className="search-movie-wrapper">
      <SearchMovieHeader trailer={videoClip} props={movieData} />
    </div>
  );
}
