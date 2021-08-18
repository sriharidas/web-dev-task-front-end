import React, { useEffect, useState } from "react";
import SearchContent from "./SearchContent";
import SearchHeader from "./SearchHeader";
import { useHistory } from "react-router";
export default function SearchPersonContainer(props) {
  const history = useHistory();
  const [personData, setPersonData] = useState({});
  useEffect(() => {
    const personfunc = async () => {
      const resp = await fetch(
        `https://sriharidas-imdb-movie-api.herokuapp.com/person/info/${props.location.state.detail}`
      );
      const response = await resp.json();
      console.log(response);
      setPersonData(response);
    };
    personfunc();
  }, []);
  return (
    <div className="search-result-container">
      <div className="search-result-wrapper" style={{ position: "relative" }}>
        {Object.keys(personData).length > 0 ? (
          <>
            <div
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                display: "none",
              }}
            >
              <input
                id="search-actor"
                placeholder="actor name"
                style={{ padding: "7px" }}
              />
              <button
                className="secondary-btn"
                onClick={() => {
                  history.push({
                    pathname: "/search",
                    state: {
                      detail: document.querySelector("#search-actor").value,
                    },
                  });
                }}
              >
                Search
              </button>
            </div>
            <SearchHeader
              props={personData}
              animation={false}
              // img={personData["full-size headshot"]}
              // title={personData.name}
              // year={personData["birth date"]}
              // nickname={personData["nick names"]}
              // height={personData["height"]}
              // spouse={personData["spouse"]}
              // TradeMark={personData["trade mark"]}
              // trailer={""}
              // cast={
              //   '"Kiefer Sutherland", "Mary Lynn Rajskub", "Carlos Bernard"'
              // }
              // director={
              //   '"Kiefer Sutherland", "Mary Lynn Rajskub", "Carlos Bernard"'
              // }
              // animation={false}
            />
            {[
              "mini biography",
              "quotes",
              "trivia",
              "salary history",
              "filmography",
            ].map((x) =>
              personData[x] !== undefined ? (
                <SearchContent
                  title={x}
                  prop={personData[x]}
                  animation={false}
                  path="/movies"
                />
              ) : (
                ""
              )
            )}
          </>
        ) : (
          <>
            <SearchHeader animation={true} />
            {[1, 2, 3, 4, 5].map((x) => (
              <SearchContent animation={true} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
