import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const BtnNext = styled.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
`;

const DateLabel = styled.p`
  font-family: 'RobotoBold';
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${globalColor.colorWhite};

  &:hover {
    color: ${globalColor.colorOrange1};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`;

const CalenderIconWrap = styled.div`
  width: 20px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
const SvgCalendar = styled.svg`
  width: 100%;
  height: 100%;
  fill: ${globalColor.colorOrange1};
`;
const CalenderBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 40px;
  background-color: transparent;
  gap: 8px;
  border: none;
  @media screen and (max-width: 767px) {
    margin-right: 20px;
    gap: 6px;
  }
`;

const BtnPrev = styled.button`
  display: flex;
  margin: 0 6px 0 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
`;

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  fill: ${globalColor.colorWhite};
`;

export {
  Wrap,
  DateLabel,
  CalenderBtn,
  BtnPrev,
  BtnNext,
  Svg,
  CalenderIconWrap,
  SvgCalendar,
};