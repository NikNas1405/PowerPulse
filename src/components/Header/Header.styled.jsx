import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { globalColor } from '../../styles/root';

export const Wrapper = styled.div`
  border-bottom: 1px solid rgba(239, 237, 232, 0.2);
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (min-width: 320px) {
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 96px;
  }
`;

export const NavLinkWrapper = styled.div`
  @media screen and (min-width: 320px) {
    margin-right: 20vw;
  }

  @media screen and (min-width: 375px) {
    margin-right: 96px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 410px;
  }
`;

export const NavLinkPowerPlus = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 1440px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const LogoNavLink = styled(NavLink)`
  display: flex;
  gap: 8px;
`;

export const Svg = styled.svg`
  fill: ${globalColor.colorOrange};

  @media screen and (min-width: 320px) {
    width: 36px;
    height: 13px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 17px;
  }

  @media screen and (min-width: 1440px) {
    width: 44px;
    height: 17px;
  }
`;
export const SvgPowerPlus = styled.svg`
  fill: ${globalColor.colorWhite};

  @media screen and (min-width: 320px) {
    width: 82px;
    height: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 15px;
  }

  @media screen and (min-width: 1440px) {
    width: 100px;
    height: 15px;
  }
`;
