import React from "react";
import "./style.css";

const Search = ({ setLocation }) => {
  return (
    <>
      <div className="searchContainer">
        <input
          className="search"
          type="text"
          placeholder="Enter Location..."
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Search;
