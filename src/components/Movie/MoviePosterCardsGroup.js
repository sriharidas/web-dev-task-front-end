import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import MoviePosterCard from "./MoviePosterCard";

function MoviePosterCardsGroup({ property, name, id, heading }) {
  const [movieData, setMovieData] = useState([]);
  const [urlData, setUrlData] = useState({});
  const [movieList, setMovieList] = useState([]);
  // const [animation, setanimation] = useState(true);
  // fetching movie list when component mounts
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(
        `http://127.0.0.1:5000/search/movies/${property}/${name}/15`
      );
      const response = await resp.json();
      setMovieData(response);
    }
    fetchData();
  }, []);

  async function MovieUrls(movie) {
    return (
      await fetch(`http://127.0.0.1:5000/get/movie/data/${movie}`)
    ).json();
  }
  // storing Movie Names in spearate State
  useEffect(() => {
    if (movieData === []) return;
    let urlList = [];
    movieData.forEach((movie) => {
      setMovieList((prevState) => [...prevState, movie["title"]]);
    });
    console.log("movies", name, movieList);
    if (movieList !== []) {
      console.log("mov", movieList);
    }
  }, [movieData]);

  // fetching movie Data like links after recieving Movie List

  useEffect(() => {
    console.log(movieList);
    if (movieList.length <= 0) return;
    async function movieUrlsData(movieList) {
      try {
        console.log(movieList);
        Promise.all(
          movieList.map(async (movie) => {
            try {
              const resp = await fetch(
                `http://127.0.0.1:5000/get/movie/data/${movie}`
              );
              const response = await resp.json();
              setUrlData((prev) => ({
                ...prev,
                [movie]: response,
              }));
            } catch (e) {
              setUrlData((prev) => ({
                ...prev,
                [movie]: {
                  "full-size cover url":
                    "https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg",
                },
              }));
            }
          })
        );
      } catch (e) {
        console.warn(e);
      }
    }
    movieUrlsData(movieList);
  }, [movieList]);
  // content container expand / shrink logic
  const handleOverflowScroll = (id) => {
    console.log(
      document
        .querySelector(`#movie-poster-card-wrapper-${id}`)
        .getBoundingClientRect()
    );
    const container = document.querySelector(
      `.movie-poster-card-container.movie-poster-card-container-${id}`
    );
    const containerOverflowBtn = document.querySelector(
      `.movie-poster-overflow-${id}`
    );
    const containerOffsetTop = document
      .querySelector(`#movie-poster-card-wrapper-${id}`)
      .getBoundingClientRect().top;

    if (container.style.overflow === "visible") {
      container.style = `overflow: hidden; height: 90vh;`;
      window.scrollTo({
        top: containerOffsetTop - document.body.getBoundingClientRect().top,
        left: 0,
        behavior: "smooth",
      });
    } else {
      container.style = `overflow: visible; height: fit-content ;`;
      // container.focus();
    }
    console.log("offset top", container.getBoundingClientRect().top);
    console.log(container.style.overflow);
  };
  return (
    <div
      className="movie-poster-card-wrapper"
      id={`movie-poster-card-wrapper-${id}`}
    >
      <h2 className="main-heading">{heading}</h2>
      <div
        className={`movie-poster-card-container movie-poster-card-container-${id}`}
      >
        <div className={`movie-poster-overflow movie-poster-overflow-${id}`}>
          <button
            onClick={() => {
              handleOverflowScroll(id);
              // alert(id);
            }}
          >
            <IoIosArrowDown />
          </button>
        </div>
        {/* Mapping through Movie Data when movies list > 0 */}
        {movieData.length > 0
          ? movieData.length !== Object.keys(urlData).length
            ? movieData.map((movie, id) => (
                <MoviePosterCard
                  title={movie["title"]}
                  ratings={movie["avg_vote"]}
                  votes={movie["votes"]}
                  genre={movie["genre"]}
                  year={movie["year"]}
                  description={movie["description"]}
                  animation={false}
                  id={id}
                  property={name}
                />
              ))
            : movieData.map((movie, id) => {
                console.log(urlData[movie["title"]]["full-size cover url"]);
                return (
                  <MoviePosterCard
                    title={movie["title"]}
                    poster={
                      urlData[movie["title"]] !== {}
                        ? urlData[movie["title"]]["full-size cover url"]
                        : ""
                    }
                    ratings={movie["avg_vote"]}
                    votes={movie["votes"]}
                    genre={movie["genre"]}
                    year={movie["year"]}
                    description={movie["description"]}
                    animation={false}
                    id={id}
                    property={name}
                  />
                );
              })
          : // content placeholder until component mounts
            [1, 2, 3, 4, 5, 6].map((x) => <MoviePosterCard animation={true} />)}
      </div>
    </div>
  );
}
export default MoviePosterCardsGroup;
