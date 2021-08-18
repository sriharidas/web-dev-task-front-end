import React, { useEffect, useState } from "react";
import SearchContent from "./SearchContent";
import SearchHeader from "./SearchHeader";

export default function SearchPersonContainer({ movieName }) {
  const [personData, setPersonData] = useState({});
  useEffect(() => {
    const personfunc = async () => {
      const resp = await fetch(
        `http://127.0.0.1:5000/person/info/${"ajith kumar"}`
      );
      const response = await resp.json();
      console.log(response);
      setPersonData(response);
    };
    personfunc();
  }, []);
  return (
    <div className="search-result-container">
      <div className="search-result-wrapper">
        {Object.keys(personData).length > 0 ? (
          <>
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
