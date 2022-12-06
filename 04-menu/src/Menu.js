import React from "react";

const Menu = props => {
  return (
    <section className="menu">
      <div className="menu-item">
        <img className="photo" src={props.img} />
        <div className="item-info">
          <header>
          <h4>{props.title}</h4>
          <div className="price">{props.price}</div>
          </header>
          <div className="item-text">{props.desc}</div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
