import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  width: 100%;
  max-width: 62.5rem;
  text-decoration: none;
  display: block;
  clear: both;
  padding: 0.3125rem;
  margin: 0.3125rem;
  border: 2px solid rgb(105, 200, 161);
  border-radius: 0.25rem;
  height: 19.375rem;
`;

const Image = styled.img`
  padding: 0.3125rem;
  width: 50%;
  float: left;
  max-width: 12.5rem;
`;

const Description = styled.section`
  color: rgb(46, 139, 87);
`;

const Show = ({ imdbID, poster, title, year, description }) => {
  return (
    <Wrapper to={`/details/${imdbID}`}>
      <Image src={`img/${poster}`} alt={`${title} cover`} />
      <Description>
        <h2>{title}</h2>
        <h3>{year}</h3>
        <p>{description}</p>
      </Description>
    </Wrapper>
  );
};

export default Show;
