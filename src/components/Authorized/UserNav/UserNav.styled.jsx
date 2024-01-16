import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

export const UserNavLink = styled(NavLink)`
  display: flex;
  padding: 10px 27px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  color: ${globalColor.colorWhite};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  &.active {
    border: 1px solid ${globalColor.colorWhite};
  }

  @media screen and (min-width: 768px) {
    color: ${globalColor.colorWhite};
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    &.active {
      background-color: ${globalColor.colorOrange};
      border: 1px solid rgba(239, 237, 232, 0.2);
    }
  }
`;
