import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

export const HeroContainer = styled.div`
  display: flex;
`;

export const HeroWrapper = styled.div`
  width: 55%;
  margin-top: 151px;
  /* margin-right: 76px; */
`;

export const HeroTitle = styled.h1`
  color: ${globalColor.colorWhite};
  font-family: Roboto;
  font-size: 70px;
  font-style: normal;
  font-weight: 500;
  line-height: 78px;
  letter-spacing: 0.7px;
  width: 598px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeroSignUpLink = styled(NavLink)`
  display: flex;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background-color: ${globalColor.colorOrange};
  color: #efede8;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  width: 190px;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: ${globalColor.colorOrange1};
  }
`;

export const HeroSignInLink = styled(NavLink)`
  display: flex;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  color: ${globalColor.colorWhite};
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;

  &:hover,
  &:focus {
    border: 1px solid ${globalColor.colorOrange};
  }
`;
