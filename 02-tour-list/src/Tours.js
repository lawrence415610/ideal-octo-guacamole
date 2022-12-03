import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const data = props.tours;

  return (
    <>
      {data.map((tour) => {
        return <Tour key={tour.id} {...tour} onRemove={props.onRemove} />;
      })}
    </>
  );
};

export default Tours;
