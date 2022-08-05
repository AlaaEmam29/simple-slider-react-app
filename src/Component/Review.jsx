import React, { useState } from "react";
import people from "./data.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const handleClick = (i) => {
    setIndex((index)=>{
        let newIndex = index + i;
        return checkNumber(newIndex)
    });
  };
  const handleSurpriseBtn = () => {
    let randomPerson = Math.floor(Math.random() * people.length)
    if(randomPerson === index)
    {
        randomPerson = index + 1
    }
    console.log(randomPerson)
    setIndex(checkNumber(randomPerson))
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h3>{name}</h3>
      <h5>{job}</h5>
      <p>{text}</p>
      <div className="btn-group">
        <button className="prev-btn" onClick={() => handleClick(-1)}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => handleClick(1)}>
          <FaChevronRight />
        </button>
      </div>
      <button className="btn-surprise" onClick={() => handleSurpriseBtn()}>
        surprise me
      </button>
    </article>
  );
}
