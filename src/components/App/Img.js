import styled, { keyframes } from 'styled-components';

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;

const Img = styled.img`
  animation: ${logoSpin} infinite 3s linear;
  height: 80px;
`;

export default Img;
