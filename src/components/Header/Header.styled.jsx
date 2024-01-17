import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LogoutIcon } from '../LogOutBtn/LogOutBtn.styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  /* border-bottom: 1px solid var(--color-text); */
  border-bottom: 1px solid rgba(239, 237, 232, 0.2);
  @media (max-width: 374px) {
    padding: 12px 18px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    padding: 12px 18px;
  }

  @media (min-width: 769px) and (max-width: 1439px) {
    padding: 19px 26px;
  }

  @media (min-width: 1440px) {
    padding: 20px 96px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  line-height: 24px;
  padding: 10px 27px;
  color: var(--color-text);
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  transition: background-color 0.3s var(--timing-function);

  &:hover,
  &:focus {
    background-color: var(--color-main-one);
  }
  &.active {
    background-color: var(--color-main-one);
  }
`;

export const StyledLinkSettings = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--color-text);
  background-color: transparent;
  border-radius: 12px;
`;

export const Burger = styled.svg`
  width: 28px;
  height: 28px;
  stroke: 'var(--color-back-two)';
  display: block;

  transition: stroke 0.3s var(--timing-function);
  &:hover,
  &:focus {
    stroke: var(--color-main-one);
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const SecondNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const LogoutIconStyled = styled(LogoutIcon)`
  stroke: var(--color-main-one);
`;