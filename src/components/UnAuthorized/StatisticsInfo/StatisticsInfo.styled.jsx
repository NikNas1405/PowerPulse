import styled from 'styled-components';
import { globalColor } from '../../../styles/root';
import bgDesktop1 from '../../../assets/bgDesktop@1x.jpg';

export const DivContainer = styled.div`
  display: flex;
  position: relative;
  background-image: url(${bgDesktop1});
  background-repeat: no-repeat;
  background-size: contain;
  width: 670px;
  height: 800px;
`;

export const VideoWrapper = styled.div`
  position: absolute;
  top: 44%;
  right: 67%;
  width: 206px;
  height: 96px;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: ${globalColor.colorSecondaryGrey};
  padding: 20px 23px 20px 36px;
  display: flex;
`;

export const WrapperSvg = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${globalColor.colorOrange1};
  margin-top: 8px;
  margin-right: 12px;
  text-align: center;
  padding: 10px;
`;

export const SvgPlay = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${globalColor.colorWhite};
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${globalColor.colorWhite};
`;

export const VideoNumber = styled.p`
  margin-bottom: 8px;
  color: ${globalColor.colorWhite};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const VideoText = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 60%;
  right: 5%;
  width: 180px;
  height: 110px;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: ${globalColor.colorOrange1};
  padding: 14px 28px 14px 38px;
`;

export const WrapperTextSvg = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${globalColor.colorBeige};
  padding: 4px;
`;

export const WrapperDescription = styled.div`
  display: flex;
  align-items: baseline;
  gap: 11px;
`;

export const TextNumber = styled.p`
  color: ${globalColor.colorWhite};
  font-family: Roboto;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -1px;
  text-transform: uppercase;
`;

export const TextDescription = styled.span`
  color: rgba(239, 237, 232, 0.65);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;
