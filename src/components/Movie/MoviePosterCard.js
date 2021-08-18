import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
function MoviePosterCard(props) {
  const [urlData, setUrlData] = useState({});
  const {
    title,
    poster,
    ratings,
    votes,
    description,
    genre,
    year,
    animation,
    id,
    property,
  } = props;
  const history = useHistory();
  useEffect(() => {
    const imgContainers = document.querySelectorAll(".movie-poster-card-img");

    // imgContainers.forEach((container, id) => {
    //   if (urlData === {}) {
    //     const imgContainer = document.querySelector(
    //       "#" + container.getAttribute("id")
    //     );
    //     imgContainer.classList.add("animate-bg");
    //   } else {
    //     const imgContainer = document.querySelector(
    //       "#" + container.getAttribute("id")
    //     );
    //     imgContainer.classList.remove("animate-bg");
    //   }
    // });
  }, []);
  useEffect(() => {
    if (animation) return;
    async function movieposterData() {
      const resp = await fetch(`http://127.0.0.1:5000/get/movie/data/${title}`);
      const response = await resp.json();
      // console.log(response);
      setUrlData(response);
    }
  }, [urlData]);

  useEffect(() => {
    // console.log(urlData);
  }, [urlData]);
  return (
    <div
      className={`movie-poster-card`}
      onClick={() =>
        history.push({
          pathname: "/movies",
          state: {
            detail: title,
          },
        })
      }
    >
      <div
        className="movie-poster-card-img animate-bg"
        id={`${property}-poster-card-img-${id}`}
        style={{
          backgroundSize: "100%",
        }}
      >
        {" "}
        {!animation && (
          <div className="main-poster-img-text">
            <span>{description}</span>
          </div>
        )}
        {/* <img src={urlData["full-size cover url"]} alt={title} /> */}
        <img src={poster} alt={title} />
      </div>
      {!animation ? (
        <>
          <div className="movie-poster-card-main">
            <div>
              <span className="movie-poster-card-heading">Movie name</span>
              <span className="title movie-poster-card-value">{title}</span>
            </div>
            <div>
              <span className="movie-poster-card-heading">Year</span>
              <span className="title movie-poster-card-value">{year}</span>
            </div>
            <div>
              <span className="movie-poster-card-heading">Genre</span>
              <span className="title movie-poster-card-value">{genre}</span>
            </div>

            <div>
              <span className="movie-poster-card-heading">Ratings</span>
              <span className="ratings movie-poster-card-value">
                {ratings} / 10
              </span>
            </div>
            <div>
              <span className="movie-poster-card-heading">Total ratings</span>
              <span className="votes movie-poster-card-value">{votes}</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div style={loadingbars} className={"animate-bg"}></div>
          <div style={loadingbars} className={"animate-bg"}></div>
          <div style={loadingbars} className={"animate-bg"}></div>
          <div style={loadingbars} className={"animate-bg"}></div>
          <div style={loadingbars} className={"animate-bg"}></div>
        </>
      )}
    </div>
  );
}
const loadingbars = {
  display: "block",
  padding: "10px",
  margin: " 10px",
  windth: "100%",
};

export default MoviePosterCard;
