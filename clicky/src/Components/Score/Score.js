import React from "react";
import "./Score.css";

const Score = props => (
  <h3 className="score">
    Score: {props.score} || Highest Score: {props.highestScore}
  </h3>
);

export default Score;
