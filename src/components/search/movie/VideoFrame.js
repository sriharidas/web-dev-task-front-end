import React from "react";

export default function VideoFrame({ trailer }) {
  console.log("trailer", trailer);
  return (
    <>
      {Object.keys(trailer) > 0 && (
        <iframe src={trailer["trailer"]} title="a" />
      )}
    </>
  );
}
