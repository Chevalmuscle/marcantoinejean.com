import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border-radius: 50%;
  border-top: 2px solid var(--accent-color);
  width: 100%;
  height: 100%;
  -webkit-animation: ${rotate} 1s ease infinite;
  animation: ${rotate} 1s ease infinite;
`;
