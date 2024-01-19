import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { globalColor } from '../../styles/root';
import bgDesktop1 from '../../assets/hero/bgDesktop@1x.jpg';
import bgDesktop2 from '../../assets/hero/bgDesktop@2x.jpg';
import bgTablet1 from '../../assets/hero/bgTablet@1x.jpg';
import bgTablet2 from '../../assets/hero/bgTablet@2x.jpg';
import bgMobilep1 from '../../assets/hero/bgMobile@1x.jpg';
import bgMobilep2 from '../../assets/hero/bgMobile@2x.jpg';

export const ErrorContainer = styled.div`
  display: flex;
`;

export const BgImage = styled.div`
  height: 100vh;
  width: 36%;
  background-image: url(${bgMobilep1});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right bottom;

  @media screen and (min-device-pixel-radio: 2) and (min-width: 320px),
    screen and (min-resolution: 192dpi) and (min-width: 320px),
    screen and (min-resolution: 2dppx) and (min-width: 320px) {
    background-image: url(${bgMobilep2});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bgTablet1});
    width: 45%;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 768px),
      screen and (min-resolution: 192dpi) and (min-width: 768px),
      screen and (min-resolution: 2dppx) and (min-width: 768px) {
      background-image: url(${bgTablet2});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bgDesktop1});
    width: 54%;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 1440px),
      screen and (min-resolution: 192dpi) and (min-width: 1440px),
      screen and (min-resolution: 2dppx) and (min-width: 1440px) {
      background-image: url(${bgDesktop2});
    }
  }
`;

export const BgText = styled.div`
  background-color: ${globalColor.colorOrange};
  height: 100vh;
  flex: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }

  @media screen and (min-width: 320px) {
    padding: 20px;
  }

  @media screen and (min-width: 375px) {
    padding: 24px 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 96px;
    /* width: 669px; */
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(20vh);
`;

export const TitleError = styled.h2`
  color: ${globalColor.colorWhite};
  margin-bottom: 14px;
  font-size: 66px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.66px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    font-size: 160px;
    line-height: 0.9375;
    letter-spacing: 1.6px;
  }
`;

export const DescriptionError = styled.p`
  color: ${globalColor.colorWhite};
  font-size: 14px;
  line-height: 1.28571;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ErrorNavlinkGoHome = styled(NavLink)`
  display: inline-flex;
  padding: 12px 38px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${globalColor.colorWhite};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  border-radius: 12px;
  border: 1px solid ${globalColor.colorInput};
  width: 147px;

  @media screen and (min-width: 768px) {
    padding: 16px 58px;
    width: 204px;
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
