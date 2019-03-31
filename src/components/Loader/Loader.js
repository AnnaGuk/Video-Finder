import React from "react";
import styled, { keyframes } from "styled-components";

const frame = keyframes`
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
`;

const Image = styled.img`
  width: 30px;
  height: auto;
  animation: ${frame} 4s infinite linear;
`;

const Loader = () => <Image src="/img/loading.png" alt="loading indicator" />;

export default Loader;
