import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

export default function Stars() {
  const [star, setStar] = useState(3);

  const stars = {
    size: 20,
    alingn: "center",
    count: 5,
    isHalf: false,
    value: 3,
    color: "black",
    activeColor: "yellow",
    onChange: (newValue) => {
      // console.log(`Example 3: new value is ${newValue}`);
      setStar(newValue);
    },
  };
  return (
    <>
        <ReactStars {...stars} />
        <h1>{star}</h1>
    </>
  );
}
