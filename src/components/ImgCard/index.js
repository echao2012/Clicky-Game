import React from "react";
import "./style.css";

function ImgCard(props) {
  return (
    <div className="card" onClick={() => props.imageClick(props.id)}>
      <div className="img-container">
        <img src={props.image} />
      </div>
    </div>
  );
}

export default ImgCard;
