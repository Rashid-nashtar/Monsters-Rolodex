import React from "react";
import "./card-list.component.styles.css";
import { Card } from "./../Card.component/card.component";
export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card monster={monster} />
    ))}
  </div>
);
