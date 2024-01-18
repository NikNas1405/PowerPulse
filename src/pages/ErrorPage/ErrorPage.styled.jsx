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
  position: relative;

  @media screen and (min-width: 320px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  z-index: 1;
`;

export const Bg = styled.div`
  background-color: ${globalColor.colorOrange};
  position: absolute;
  top: 0;
  left: -10%;
  z-index: -1;

  @media screen and (min-width: 320px) {
    width: 240px;
    height: 830px;
  }

  @media screen and (min-width: 375px) {
    height: 888px;
  }

  @media screen and (min-width: 768px) {
    width: 420px;
    height: 1024px;
  }

  @media screen and (min-width: 1440px) {
    width: 57%;
    height: 800px;
    position: absolute;
    top: 0;
    left: -10%;
  }
`;

export const TitleError = styled.h2`
  color: ${globalColor.colorWhite};
  font-family: Roboto;
  font-size: 66px;
  font-style: normal;
  font-weight: 500;
  line-height: 66px;
  letter-spacing: 0.66px;
  width: 114px;
  height: 66px;
  margin-bottom: 14px;
  margin-top: 250px;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 150px;
    letter-spacing: 1.6px;
    margin-top: 309px;
    margin-bottom: 28px;
    width: 277px;
    height: 150px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 221px;
  }
`;

export const DescriptionError = styled.p`
  width: 200px;
  height: 162px;
  color: ${globalColor.colorWhite};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 28px;
  margin-right: 20px;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 28px;
    margin-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 477px;
    margin-right: 197px;
  }
`;

export const ErrorNavlinkGoHome = styled(NavLink)`
  display: inline-flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${globalColor.colorWhite};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  border-radius: 12px;
  border: 1px solid ${globalColor.colorInput};

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    width: 206px;
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const BgContainer = styled.div`
  @media screen and (min-width: 320px) {
    background-image: url(${bgMobilep1});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top 0% right 125%;
    width: 320px;
    height: 669px;
    position: absolute;
    top: 40%;
    left: 40%;
    z-index: -1;
    object-fit: fill;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 320px),
      screen and (min-resolution: 192dpi) and (min-width: 320px),
      screen and (min-resolution: 2dppx) and (min-width: 320px) {
      background-image: url(${bgMobilep2});
    }
  }

  @media screen and (min-width: 375px) {
    width: 446px;
    height: 669px;
  }

  @media screen and (min-width: 768px) {
    background-image: url(${bgTablet1});
    width: 670px;
    height: 800px;
    top: 32%;
    left: 50%;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 768px),
      screen and (min-resolution: 192dpi) and (min-width: 768px),
      screen and (min-resolution: 2dppx) and (min-width: 768px) {
      background-image: url(${bgTablet2});
    }
  }

  @media screen and (min-width: 1440px) {
    /* position: absolute; */
    background-image: url(${bgDesktop1});
    width: 670px;
    height: 800px;
    top: 0;
    left: 55%;
    /* position: relative; */
    /* margin-left: 174px; */
    background-position: top;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 1440px),
      screen and (min-resolution: 192dpi) and (min-width: 1440px),
      screen and (min-resolution: 2dppx) and (min-width: 1440px) {
      background-image: url(${bgDesktop2});
    }
  }
`;
