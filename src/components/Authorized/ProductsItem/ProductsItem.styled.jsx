import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

export const ProductsItemStyled = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: rgba(239, 237, 232, 0.05);
  border-radius: 12px;
  border: 1px rgba(239, 237, 232, 0.2) solid;

  @media (min-width: 320px) {
    width: 87vw;
  }

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 1440px) {
    width: 405px;
  }
`;

export const DietSpan = styled.div`
  position: absolute;
  padding: 5px 7.5px;
  background: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  word-wrap: break-word;
`;

export const SvgWrapper = styled.svg`
  width: 14px;
  height: 14px;
`;

export const Text = styled.p`
  > span {
    color: rgba(239, 237, 232, 0.4);
  }

  display: flex;
  gap: 4px;
  color: ${globalColor.colorWhite};
  font-size: 12px;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: nowrap;
`;

export const TextCategory = styled.p`
  > span {
    color: rgba(239, 237, 232, 0.4);
  }

  display: flex;
  gap: 4px;
  color: ${globalColor.colorWhite};
  font-size: 12px;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: nowrap;

  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

export const Title = styled.h2`
  color: ${globalColor.colorWhite};
  font-size: 20px;
  line-height: 1.2;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: auto;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${globalColor.colorOrange};
  gap: 8px;
  width: 49px;
  height: 18px;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;

  font-size: 14px;
  line-height: 1.2857;
  word-wrap: break-word;

  @media (min-width: 768px) {
    width: 53px;
    font-size: 16px;
    line-height: 1.5;
  }

  transition: color 0.3s ease;

  &:hover {
    color: ${globalColor.colorOrange1};
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 41px;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 335px) {
    flex-wrap: wrap;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  align-items: center;
`;
