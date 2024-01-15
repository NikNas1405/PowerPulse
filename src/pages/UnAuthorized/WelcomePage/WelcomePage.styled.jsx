import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

export const HeroContainer = styled.div`
  @media screen and (min-width: 320px) {
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
  /* margin-top: 90px; */
  position: relative;
  margin-top: 127px;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    /* margin-top: 140px; */
    margin-top: 189px;
  }

  @media screen and (min-width: 1440px) {
    width: 55%;
    /* margin-top: 151px; */
    margin-top: 200px;
    margin-right: 76px;
  }
`;

export const HeroTitle = styled.h1`
  width: 300px;
  z-index: 1;

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
  }

  @media screen and (min-width: 1440px) {
    font-size: 70px;
    line-height: 78px;
    letter-spacing: 0.7px;
    width: 598px;
  }
`;

export const HeroSvg = styled.svg`
  position: absolute;
  width: 92px;
  height: 30px;
  top: 36%;
  left: -5%;

  @media screen and (min-width: 320px) {
    width: 92px;
    height: 30px;
    top: 36%;
    left: -4%;
  }

  @media screen and (min-width: 375px) {
    top: 35.7%;
    left: -2%;
    width: 98px;
    height: 35px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 185px;
    height: 67px;
    margin-top: 83px;
  }

  @media screen and (min-width: 1440px) {
    width: 185px;
    height: 67px;
    top: 13%;
    left: -3%;
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
    margin-top: 282px;
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
  }

  @media screen and (min-width: 1440px) {
    padding: 16px 60px;
    width: 190px;

    &:hover,
    &:focus {
      background-color: ${globalColor.colorOrange1};
    }
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
  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 24px;
    width: 184px;
  }

  @media screen and (min-width: 1440px) {
    padding: 16px 60px;

    &:hover,
    &:focus {
      border: 1px solid ${globalColor.colorOrange};
    }
  }
`;
