import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { globalColor } from '../../styles/root';

export const NavLinkPower = styled.div`
  z-index: 1;
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
  }
`;
