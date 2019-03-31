import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.3125rem;
  margin: 0.125rem;
  border: 1px solid rgb(105, 200, 161);
  border-radius: 0.25rem;
  width: 18.75rem;
`;

const Button = styled.button`
  padding: 0.3125rem;
  margin: 0.125rem;
  border: 1px solid rgb(105, 200, 161);
  border-radius: 0.25rem;
  background-color: rgb(208, 240, 192);
  color: rgb(63, 180, 136);
`;

const Search = ({ handleEvent, handleClick, value }) => {
  return (
    <>
      <Input type="text" onChange={handleEvent} value={value} />
      <Button onClick={handleClick}>Search</Button>
    </>
  );
};

export default Search;
