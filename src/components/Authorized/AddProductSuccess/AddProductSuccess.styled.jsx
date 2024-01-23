import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { globalColor } from '../../../styles/root';
import avocado from '../../../assets/products/avocado.png';

export const AddProductSuccessStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 335px;
  height: 362px;
  padding: 48px;
  background: #10100f;
  border-radius: 12px;
  overflow: hidden;
  border: 1px rgba(239, 237, 232, 0.2) solid;
  text-align: center;

  @media (max-width: 335px) {
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  @media (min-width: 768px) {
    width: 430px;
    height: 428px;
    padding: 64px;
  }
`;

export const Avocado = styled.div`
  margin: 0 auto 3px;
  width: 123px;
  height: 97px;
  background: url(${avocado});

  @media (min-width: 768px) {
    margin-bottom: 19px;
  }
`;

export const Title = styled.h4`
  margin: 0 auto 16px;
  color: ${globalColor.colorWhite};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  word-wrap: break-word;
`;

export const Text = styled.p`
  color: ${globalColor.colorOrange};
  line-height: 1.2857;
  word-wrap: break-word;
  > span {
    color: rgba(239, 237, 232, 0.3);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  margin: 32px auto 16px;
  width: 157px;
  height: 42px;
  background-color: ${globalColor.colorOrange};
  border-radius: 12px;
  color: ${globalColor.colorWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.125;
  word-wrap: break-word;
  outline: none;
  border: transparent;

  @media (min-width: 768px) {
    height: 52px;
  }

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${globalColor.colorOrange1};
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${globalColor.colorInput};
  line-height: 1.2357;
  word-wrap: break-word;
  transition: color 0.3s ease;

  > svg {
    stroke: ${globalColor.colorInput};
    width: 16px;
    height: 16px;
    transition: stroke 0.3s ease;
  }

  &:hover {
    color: ${globalColor.colorOrange1};
    > svg {
      stroke: ${globalColor.colorOrange1};
      width: 16px;
      height: 16px;
    }
  }
`;
