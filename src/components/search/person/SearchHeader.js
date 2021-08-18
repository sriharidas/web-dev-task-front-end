import React from "react";

export default function SearchHeader({ props, animation }) {
  console.log(animation);
  return (
    <div>
      {animation ? (
        <div className="search-header">
          <div className="search-header-img animate-bg-dark">
            <img src="" alt="" />
          </div>
          <div className="search-header-content ">
            {[1, 2, 3, 4, 5, 7, 8, 9, 0].map((x) => (
              <span className="animate-bg-dark animate-bar"></span>
            ))}
          </div>
        </div>
      ) : (
        <div className="search-header">
          <div className="search-header-img">
            <img src={props["full-size headshot"]} alt="inception" />
          </div>
          <div className="search-header-content ">
            {[
              "name",
              "birth date",
              "nick names",
              "height",
              "canonical name",
              "imdbID",
              "trade mark",
            ].map((x) => (
              <div className="search-header-content-container">
                <div className="title">{x}</div>
                <div className="content">
                  {typeof props[x] === "object" ? (
                    props[x].map((i) => <span>{i}</span>)
                  ) : (
                    <span>{props[x]}</span>
                  )}
                </div>
              </div>
            ))}

            {/* <div className="search-header-content-container">
                  <span>Story</span>
                  <span>"Jack Bauer races against the clock to subvert terrorist plots and save his nation from ultimate disaster.::rball4042"</span>
              </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
