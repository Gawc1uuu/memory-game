import React from "react";
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" alt="card front" src={card.src} />
        <img
          className="back"
          alt="card back"
          onClick={handleClick}
          src="/img/cover.png"
        />
      </div>
    </div>
  );
}
