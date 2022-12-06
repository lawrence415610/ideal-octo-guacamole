import React from "react";

const Categories = props => {
  const filterHandler = (event) => {
    props.onChangeCategory(event.target.name);
  };
  return (
    <div className="btn-container">
      <button name="all" onClick={filterHandler} className="filter-btn">
        All
      </button>
      <button name="lunch" onClick={filterHandler} className="filter-btn">
        Lunch
      </button>
      <button name="breakfast" onClick={filterHandler} className="filter-btn">
        Breakfast
      </button>
      <button name="shakes" onClick={filterHandler} className="filter-btn">
        Shakes
      </button>
    </div>
  );
};

export default Categories;
