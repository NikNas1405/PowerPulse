import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

const Product = styled.div`
  width: 100%;
  min-height: 335px;
  padding: 16px 8px 16px 16px;

  border: 1px solid #efede820;
  border-radius: 12px;

  background-color: #efede80d;

  @media (min-width: 768px) {
    min-height: auto;
    height: 234px;
    width: 704px;
  }
  @media (min-width: 1440px) {
    width: 826px;
  }

  & table {
    width: 100%;
  }
`;
const TitleNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;
const TitleText = styled.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`;
const NavBlock = styled.div`
  &:hover span {
    color: ${globalColor.colorOrange1};
  }
`;
const NavText = styled.span`
  color: ${globalColor.colorOrange};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  transition: color 300ms;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
const Svg = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;
const NotProductText = styled.p`
  color: #efede84d;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-top: 125px;
  @media (min-width: 768px) {
    margin-top: 65px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export { NotProductText, Svg, NavText, NavBlock, TitleText, TitleNav, Product };
