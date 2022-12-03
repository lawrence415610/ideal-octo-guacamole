import React from "react";

const List = props => {
  return (
      <li>
        <div>
          <img src={props.people.image} alt="avatar"/>
        </div>
        <div>
          <h4>{props.people.name}</h4>
          <p>{props.people.age}</p>
        </div>
      </li>
  );
};

export default List;
