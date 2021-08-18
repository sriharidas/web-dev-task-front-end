import React from "react";
import VideoFrame from "./VideoFrame";
import Slider from "../../slider/Slider";
import { AiFillLike, AiOutlineFundView } from "react-icons/ai";
import { FaEye, FaStarHalfAlt } from "react-icons/fa";
import SearchContent from "./../person/SearchContent";
export default function SearchMovieHeader({ trailer, props }) {
  return (
    <div className="search-movie">
      {Object.keys(props).length > 0 ? (
        <>
          <div className="search-movie-title">
            <div className="search-movie-header">
              <img src={props["full-size cover url"]} alt={props["title"]} />
              <div>
                {[
                  "title",
                  "year",
                  "rating",
                  "votes",
                  "runtimes",
                  "languages",
                  "genres",
                  "director",
                ].map((x) => (
                  <div className="search-movie-head">
                    <div>{x}</div>
                    <div>{props[x]}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="search-movie-main">
              <h3>Plot</h3>
              <p>{props["plot"]}</p>
              <VideoFrame trailer={trailer} />
            </div>
            {["cast", "producers", "writers"].map((x) => (
              <SearchContent
                title={x}
                prop={props["cast"]}
                direction={"row"}
                path="/search"
              />
            ))}
          </div>
        </>
      ) : (
        <div className="search-movie-title">
          <div className="search-movie-header">
            <img className="animate-bg" alt="" />
            <div>
              <div className="animate-bg animate-bar"></div>
              <div className="animate-bg animate-bar"></div>
              <div className="animate-bg animate-bar"></div>
              <div className="animate-bg animate-bar"></div>
              <div className="animate-bg animate-bar"></div>
              <div className="animate-bg animate-bar"></div>
              <div className="animate-bg animate-bar"></div>
              <div className="animate-bg animate-bar"></div>
            </div>
          </div>
          <div
            className="animate-bg animate-bar"
            style={{ margin: "20px 0" }}
          ></div>
          <div
            className="animate-bg animate-bar"
            style={{ margin: "20px 0" }}
          ></div>
          <div
            className="animate-bg animate-bar"
            style={{ margin: "20px 0" }}
          ></div>
        </div>
      )}
    </div>
  );
}
