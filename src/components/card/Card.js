import React from "react";
import "./style.css";

const Card = ({ temp, name }) => {
  return (
    <>
      <div className="weatherContainer">
        <div className="container">
          <div className="temp">{temp.temp}°F</div>
          <div className="name">{name.name}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
