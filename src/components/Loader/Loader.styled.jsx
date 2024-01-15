import styled, { keyframes } from 'styled-components';

const waviy = keyframes`
  0%, 40%, 100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
`;

export const DivWave = styled.div`
  @media screen and (min-width: 320px) {
    position: absolute;
    top: 35%;
    left: 30%;
    display: flex;
    -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(255, 251, 251, 0.363));
    & > span {
      color: white;
      display: inline-block;
      font-size: 3rem;
      text-transform: uppercase;
      animation: ${waviy} 1s infinite;
      animation-delay: calc(0.1s * var(--i));
    }
  }

  @media screen and (min-width: 768px) {
    left: 30%;
    & > span {
      font-size: 4rem;
    }
  }

  @media screen and (min-width: 1440px) {
    top: 35%;
    left: 40%;
  }
`;
