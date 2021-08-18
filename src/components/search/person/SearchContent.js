import React from "react";

export default function SearchContent({ title, prop, animation }) {
  const ContentData = (prop) => {
    const value =
      typeof prop === "object"
        ? Object.keys(prop).map((x) => ContentData(prop[x]))
        : prop;
    console.log(value);
    return <p>{value}</p>;
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
          <div>
            {/* {typeof prop === "object"
              ? (Object.keys(prop).map((x) => {
                typeof prop[x] === 'object'? Object.keys(prop[x])
              }) : 'a')
              : { prop }} */}
            {ContentData(prop)}
          </div>
        </>
      )}
    </div>
  );
}
