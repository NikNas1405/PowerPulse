import styled from 'styled-components';

export const IconSettings = styled.svg`
  width: 24px;
  height: 24px;
  display: block;
  transition: stroke 0.3s cubic-bezier(0.165, 0.84, 0.44, 1.03)
;
  &:hover,
  &:focus {
    stroke: white;
  }
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const IconUserInner = styled.svg`
  width: 28px;
  height: 28px;
  display: block;
  transition: fill 0.3s cubic-bezier(0.165, 0.84, 0.44, 1.03);
  position: absolute;
  transform: translate(50%, 50%);
  bottom: 45%;
  right: 45%;
`;

export const IconUser = styled.svg`
  width: 28px;
  height: 28px;
  display: block;
  transition: fill 0.3s cubic-bezier(0.165, 0.84, 0.44, 1.03);
  position: absolute;
  transform: translate(50%, 50%);
  top: 20%;
  left: 20%;
`;

export const UserWrapper = styled.div`
  border: 1px solid #E6533C;
  border-radius: 50%;
  width: 37px;
  height: 37px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;


