import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

export const HeroContainer = styled.div`
  @media screen and (min-width: 320px) {
    position: relative;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const HeroWrapper = styled.div`
  position: relative;
  padding: 24px 0;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }

  @media screen and (min-width: 1440px) {
    width: 56%;
  }
`;

export const HeroTitle = styled.h1`
  width: 300px;
  z-index: 1;
  margin-top: 90px;

  @media screen and (min-width: 375px) {
    color: ${globalColor.colorWhite};
    font-family: Roboto;
    font-size: 38px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0.38px;
    width: 335px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    position: absolute;
    font-size: 70px;
    line-height: 78px;
    letter-spacing: 0.7px;
    width: 598px;
    margin-bottom: 64px;
    margin-top: 140px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 70px;
    line-height: 78px;
    letter-spacing: 0.7px;
    width: 598px;
    margin-top: 151px;
  }
`;

export const HeroSvg = styled.svg`
  position: absolute;

  @media screen and (min-width: 320px) {
    width: 92px;
    height: 30px;
    top: 167px;
    left: -13px;
  }

  @media screen and (min-width: 375px) {
    top: 169px;
    left: -8px;
    width: 98px;
    height: 35px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 185px;
    height: 67px;
    margin-top: 83px;
    top: 190px;
    left: -18px;
  }

  @media screen and (min-width: 1440px) {
    width: 185px;
    height: 67px;
    top: 284px;
    left: -17px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 14px;
  width: 335px;
  position: absolute;
  margin-top: 40px;
  z-index: 1;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 768px;
    margin-top: 424px;
  }
  @media screen and (min-width: 1440px) {
    width: 768px;
    gap: 20px;
  }
`;

export const HeroSignUpLink = styled(NavLink)`
  display: flex;
  padding: 12px 34px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background-color: ${globalColor.colorOrange};
  color: ${globalColor.colorWhite};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 375px) {
    width: 136px;
    height: 42px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    padding: 16px 60px;
    width: 190px;
    height: 56px;
  }

  &:hover,
  &:focus {
    background-color: ${globalColor.colorOrange1};
  }
`;

export const HeroSignInLink = styled(NavLink)`
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 136px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  color: ${globalColor.colorWhite};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 24px;
    width: 184px;
    height: 56px;
  }

  &:hover,
  &:focus {
    border: 1px solid ${globalColor.colorOrange};
  }
`;

export const BgWrapper = styled.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    top: 98.2%;
    left: 17%;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    position: absolute;
    top: -24px;
    left: 0;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    width: 45%;
  }
`;
