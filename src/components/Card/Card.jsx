import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="banner">
          <img src={props.img} alt="website_template" />
        </div>
        <div className="content">
          <h3>{props.title}</h3>
        </div>
        <div className="buttons">
          <a href={props.nav} className="button">
            Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
