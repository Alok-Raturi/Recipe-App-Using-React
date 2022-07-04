import React from "react";
import "./App.css";
const Recipe = (props) => {
  return (
    <div className="card">
      <img src={props.image} class="img-fluid" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">
          {props.name} <span class="badge bg-danger">{props.cuisineType}</span>
        </h5>

        <ul className="card-text list-group list-group-flush">
          {props.ingridients.map((items) => (
            <li>
              {items.text} ({items.quantity} {items.measure})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
