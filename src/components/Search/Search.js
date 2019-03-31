import React from "react";

const Search = ({ handleEvent, handleClick, value }) => {
  return (
    <>
      <input type="text" onChange={handleEvent} value={value} />
      <button onClick={handleClick}>Search</button>
    </>
  );
};

export default Search;
