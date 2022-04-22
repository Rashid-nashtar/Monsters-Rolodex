import React from "react";
import "./searchfueld.component.styles.css";
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    onChange={handleChange}
    placeholder={placeholder}
  />
);
