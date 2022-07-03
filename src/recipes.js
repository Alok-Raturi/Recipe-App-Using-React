import React from "react";
import "./App.css";
const Recipe = (props) => {
  return (
    <div className="card">
      <img src={props.image} class="img-fluid" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          {props.ingridients.map((items) => (
            <li>{items.text}</li>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Recipe;
