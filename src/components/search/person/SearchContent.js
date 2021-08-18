import React from "react";
import { Link } from "react-router-dom";

export default function SearchContent({
  title,
  prop,
  animation,
  direction,
  path,
}) {
  const ContentData = (prop, link) => {
    let data;
    const value =
      typeof prop === "object"
        ? Object.keys(prop).map((x) => ContentData(prop[x]))
        : prop;
    console.log(value, link);
    data = link ? (
      <div>
        {value.map((a) => {
          console.log(a.props.children);
          return (
            <Link
              to={{
                pathname: path,
                state: {
                  detail: a.props.children,
                },
              }}
            >
              {a}
            </Link>
          );
        })}
      </div>
    ) : (
      <span style={{ padding: "0 5px" }}>{value}</span>
    );
    return data;
  };

  return (
    <div className="search-main-content" style={{ marginTop: "20px" }}>
      {animation ? (
        <>
          <div
            className="animate-bar animate-bg-dark"
            style={{
              margin: "10px 0",
              width: "35%",
              border: "none",
            }}
          ></div>
          <p
            className="animate-bar animate-bg-dark"
            style={{ margin: "5px 0" }}
          ></p>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <div style={{ display: "flex", flexDirection: direction }}>
            {title.includes("filmography") ||
            title.includes("cast") ||
            title.includes("producers") ||
            title.includes("writers")
              ? ContentData(prop, true)
              : ContentData(prop, false)}
          </div>
        </>
      )}
    </div>
  );
}
