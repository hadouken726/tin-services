// https://www.npmjs.com/package/react-rating-stars-component
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

export default function Stars() {
  const [star, setStar] = useState(3);

  const stars = {
    size: 20,
    alingn: "center",
    count: 5,
    isHalf: false,
    value: star,
    color: "black",
    activeColor: "yellow",
    onChange: (newValue) => {
      console.log(`new value is ${newValue}`);
      setStar(newValue);
    },
  };
  return (
    <>
      <ReactStars size="100px" {...stars} />
    </>
  );
}
