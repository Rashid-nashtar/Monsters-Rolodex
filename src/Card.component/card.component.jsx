import React from "react";
import "./card.component.styles.css";
export const Card = (props) => (
  <div key={props.monster.id} className="card-container">
    <h1>{props.monster.name}</h1>
    <img
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      alt={props.monster.name}
    />
    <h3>{props.monster.email}</h3>
  </div>
);
