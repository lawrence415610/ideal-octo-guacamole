import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [category, setCategory] = useState("all");

  const dataSelection = () => {
    let data;
    if (category === "all") {
      data = items;
    } else {
      data = items.filter((item) => item.category === category);
    }
    return data;
  };

const onChangeCategory = category => {
  setCategory(category);
}

  return (
    <div className="section">
      <div className="menu">
        <h2 className="title">title</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <Categories onChangeCategory={onChangeCategory}/>
      </div>
      <div className="section-center">
        {dataSelection().map((item) => (
          <Menu key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
