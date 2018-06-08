import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => {
  return (
    <div className="CharacterCard card">
      <div className="img-container">
        <img
          src={props.image}
          name={props.name}
          alt={props.name}
          onClick={e => {
            props.checkCard(e);
          }}
        />
      </div>
    </div>
  );
};

export default CharacterCard;
