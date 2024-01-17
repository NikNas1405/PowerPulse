import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { globalColor } from '../../styles/root';

export const HeaderConatiner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const NavLinkWrapper = styled.div`
  margin-right: 96px;
  @media screen and (min-width: 768px) {
    margin-right: 410px;
  }
`;
export const NavLinkPowerPlus = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(239, 237, 232, 0.2);
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
