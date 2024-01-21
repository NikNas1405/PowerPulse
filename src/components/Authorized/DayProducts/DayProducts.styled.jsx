import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

export const ProductsTableWrap = styled.div`
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

export const TitleNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const TitleText = styled.p`
  color: #efede880;
  font-size: 14px;
  line-height: 18px;
`;

export const NavBlock = styled.div`
  &:hover span {
    color: ${globalColor.colorOrange1};
  }
`;

export const NavText = styled.span`
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

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  stroke: ${globalColor.colorOrange};
`;

export const NotProductText = styled.p`
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

export const TableWrapper = styled.div`
  scroll-behavior: auto;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 767px) {
    max-height: 762px;
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-height: 177px;
    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 804px;
    padding: 0 8px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: rgba(239, 237, 232, 0.1);
  }
`;

export const TableStyled = styled.table`
  border-spacing: 8px;
  border-collapse: separate;
  display: block;

  @media screen and (max-width: 767px) {
    position: relative;
    height: 264px;
    width: 100%;

    &:last-child {
      height: 234px;
    }
  }
`;

export const TableTitleArray = styled.thead`
  text-align: left;
`;

export const TableTitleTh = styled.th`
  color: #ef8964;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  @media screen and (max-width: 767px) {
    position: absolute;

    &:nth-of-type(2) {
      top: 88px;
    }

    &:nth-of-type(3) {
      top: 168px;
    }

    &:nth-of-type(4) {
      top: 168px;
      left: 33.2%;
    }

    &:nth-of-type(5) {
      top: 168px;
      left: 63.2%;
    }
  }

  @media screen and (min-width: 768px) {
    &:first-of-type {
      width: 204px;
    }

    &:nth-of-type(2) {
      width: 128px;
    }

    &:nth-of-type(3) {
      width: 90px;
    }

    &:nth-of-type(4) {
      width: 90px;
    }

    &:nth-of-type(5) {
      width: 80px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 212px;
    }

    &:nth-of-type(2) {
      width: 166px;
    }

    &:nth-of-type(3) {
      width: 105px;
    }

    &:nth-of-type(4) {
      width: 105px;
    }

    &:nth-of-type(5) {
      width: 110px;
    }
  }
`;

export const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  background-color: transparent;
  padding: 0;

  @media screen and (max-width: 767px) {
    position: absolute;
    top: 203px;
    left: 91%;
  }

  @media screen and (min-width: 768px) {
    padding-left: 4px;
  }
`;

export const SvgTableStyled = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${globalColor.colorOrange1};
  transition:
    stroke 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03),
    fill 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);

  &:is(:hover, :focus) {
    stroke: ${globalColor.colorOrange};
  }
`;

export const TypeRecommendSwgSpan = styled.span`
  @media screen and (min-width: 320px) {
    color: ${globalColor.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const TableRowStyled = styled.tr`
  font-size: 12px;
  line-height: 18px;
  color: ${globalColor.colorOrange1};
`;

export const TableDataStyled = styled.td`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  color: ${globalColor.colorWhite};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (max-width: 767px) {
    position: absolute;
    padding: 10px 14px;
    font-size: 14px;
    line-height: ${18 / 14};

    &:first-of-type {
      top: 34px;
      width: 93.6%;
    }

    &:nth-of-type(2) {
      top: 114px;
      width: 93.6%;
    }

    &:nth-of-type(3) {
      top: 194px;
      width: 26.2%;
    }

    &:nth-of-type(4) {
      top: 194px;
      left: 33.2%;
      width: 25.9%;
    }

    &:nth-of-type(5) {
      top: 194px;
      left: 63.2%;
      width: 24.6%;
    }
  }

  @media screen and (min-width: 768px) {
    position: relative;
    font-size: 16px;
    line-height: ${24 / 16};
    padding: 7px 14px;

    &:first-of-type {
      max-width: 204px;
    }

    &:nth-of-type(2) {
      max-width: 128px;
    }

    &:nth-of-type(3) {
      max-width: 90px;
    }

    &:nth-of-type(4) {
      max-width: 90px;
    }

    &:nth-of-type(5) {
      max-width: 80px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      max-width: 212px;
    }

    &:nth-of-type(2) {
      max-width: 166px;
    }

    &:nth-of-type(3) {
      max-width: 105px;
    }

    &:nth-of-type(4) {
      max-width: 105px;
    }

    &:nth-of-type(5) {
      max-width: 110px;
    }
  }
`;
