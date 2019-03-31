import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  width: 32%;
  text-decoration: none;
  display: block;
  clear: both;
  padding: 5px;
`;

const Image = styled.img`
  width: 50%;
  float: left;
`;

const Show = ({ imdbID, poster, title, year, description }) => {
  return (
    <Wrapper to={`/details/${imdbID}`}>
      <Image src={`img/${poster}`} alt={`${title} cover`} />
      <div>
        <h3>{title}</h3>
        <h2>{year}</h2>
        <p>{description}</p>
      </div>
    </Wrapper>
  );
};

export default Show;
