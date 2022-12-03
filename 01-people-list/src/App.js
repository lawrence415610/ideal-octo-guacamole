import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [user, setUser] = useState(
    data.map((people) => <List key={people.id} people={people} />)
  );

  const onClearUser = () => {
    setUser([]);
  };

  return (
    <main>
      <div className="container">
        <h3>{`${user.length} people all together`}</h3>
        <ul className="person">{user}</ul>
        <div className="btn">
        <button onClick={onClearUser}>Clear All</button>
        </div>
      </div>
    </main>
  );
}

export default App;
