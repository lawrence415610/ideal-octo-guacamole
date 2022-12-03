import React, { useState } from "react";

const Tour = ({id, image, info, price, name, onRemove}) => {
  const [more, setMore] = useState(false);

  const moreHandler = () => {
    setMore(!more);
  };

  const deleteHandler = () => {
    console.log(id);
    onRemove(id);
  }

  return (
    <section className="single-tour">
      <img alt="tour" src={image} />

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <div>
          {more ? info : info.substring(0, 200)+"..."}
          <button onClick={moreHandler}>
            {more ? "show more" : "show less"}
          </button>
        </div>
        <button className="btn delete-btn" onClick={deleteHandler}>Not Interested</button>
      </footer>
    </section>
  );
};

export default Tour;
