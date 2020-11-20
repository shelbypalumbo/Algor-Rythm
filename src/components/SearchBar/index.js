import React from "react";
import "./style.css";

const SearchBar = props => {
  return (
    <input
      className="searchBar"
      type="text"
      placeholder="Search an algorithm..."
      onChange={props.onChange}
    ></input>
  );
};

export default SearchBar;
