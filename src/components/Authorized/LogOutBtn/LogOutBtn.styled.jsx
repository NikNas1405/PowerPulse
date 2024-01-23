import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

export const LogOutContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BtnLogOut = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${globalColor.colorWhite};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  background-color: transparent;
  outline: none;
  border: none;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
 
  &:hover > svg {
    stroke: ${globalColor.colorOrange1};
  }
`;

export const SvgLogOutBtn = styled.svg`
  transition: stroke 0.3s ease;
  width: 20px;
  height: 20px;
  stroke: ${globalColor.colorOrange};
`;
