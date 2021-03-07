import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";

const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article
      className="question"
      onMouseLeave={() => {
        setShowInfo(false);
      }}
      onMouseEnter={() => {
        setShowInfo(true);
      }}
    >
      <div className="question-title">
        <h3>{title}</h3>
        <button
          className="show-button"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? <FiMinusCircle /> : <BsPlusCircle />}
        </button>
      </div>

      {showInfo && (
        <div>
          <div className="divide-line"></div>
          <p>{info}</p>
        </div>
      )}
    </article>
  );
};

export default Question;
