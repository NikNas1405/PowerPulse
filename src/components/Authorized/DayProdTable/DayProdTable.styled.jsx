import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

const ProdBlock = styled.div`
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
`;
const ProdTable = styled.table`
  border-spacing: 8px;
  border-collapse: separate;

  @media screen and (max-width: 767px) {
    position: relative;
    height: 264px;
    width: 100%;

    &:last-child {
      height: 234px;
    }
  }
`;
const ProdTitleBlock = styled.thead`
  text-align: left;
`;
const ProdTitle = styled.tr`
  font-size: 12px;
  line-height: 18px;
  color: ${globalColor.colorOrange1};
`;
const ProdTitleTh = styled.th`
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
const BtnDel = styled.button`
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
const Svg = styled.svg`
  width: 20px;
  height: 20px;
  stroke: #ef8964;
  transition:
    stroke 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03),
    fill 250ms cubic-bezier(0.165, 0.84, 0.44, 1.03);

  &:is(:hover, :focus) {
    stroke: #e6533c;
  }
`;
const ProdRecomSpan = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
  background-color: green;
`;
export {
  ProdBlock,
  ProdTable,
  ProdTitleBlock,
  ProdTitle,
  ProdTitleTh,
  BtnDel,
  Svg,
  ProdRecomSpan,
};
