import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  let [userNum, setUserNum] = useState(0);
  const user = people[userNum];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const enterPrevUser = () => {
    setUserNum(index=>{
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  };

  const enterNextUser = () => {
    setUserNum(index=>{
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  };

  const enterRandomUser = () => {
    const randomNum = Math.round(Math.random(0, 100) * 3);
    console.log(setUserNum(randomNum));
  };

  return (
    <section>
      <div className="title">
        <h2>Review</h2>
        <div className="underline"></div>
      </div>
      <div className="container">
        <div className="review">
          <div className="img-container">
            <img alt="people" src={user.image} className="person-img" />
            <div className="quote-icon">
              <FaQuoteRight />
            </div>
          </div>
          <div className="author">{user.name}</div>
          <div className="job">{user.job}</div>
          <div className="info">{user.text}</div>
          <div>
            <FaChevronLeft onClick={enterPrevUser} className="prev-btn" />
            <FaChevronRight onClick={enterNextUser} className="next-btn" />
          </div>
          <button onClick={enterRandomUser} className="random-btn">
            Surprise Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
