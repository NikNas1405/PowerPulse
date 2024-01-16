import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

export const BtnIconClose = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  stroke: rgba(239, 237, 232, 1);
  margin-right: 0;
  margin-left: auto;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const UserNavMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 202px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  gap: 16px;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 222px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
  }
`;

export const LogOutContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BtnLogOut = styled.button`
  color: ${globalColor.colorWhite};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    align-items: center;
  }
`;

export const SvgLogOutBtn = styled.svg`
  width: 20px;
  height: 20px;
`;
