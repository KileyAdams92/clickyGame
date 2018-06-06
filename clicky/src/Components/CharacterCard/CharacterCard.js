import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => {
  return (
    <div className="CharacterCard card">
      <div className="img=container">
        <img src={props.image} />
      </div>;
    </div>
  );
};

export default CharacterCard;
