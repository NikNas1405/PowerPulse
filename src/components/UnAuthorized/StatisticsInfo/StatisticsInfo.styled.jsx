import styled, { css } from 'styled-components';
import { globalColor } from '../../../styles/root';
import bgDesktop1 from '../../../assets/hero/bgDesktop@1x.jpg';
import bgDesktop2 from '../../../assets/hero/bgDesktop@2x.jpg';
import bgTablet1 from '../../../assets/hero/bgTablet@1x.jpg';
import bgTablet2 from '../../../assets/hero/bgTablet@2x.jpg';
import bgMobilep1 from '../../../assets/hero/bgMobile@1x.jpg';
import bgMobilep2 from '../../../assets/hero/bgMobile@2x.jpg';

export const DivContainer = styled.div`
  display: flex;

  @media screen and (min-width: 320px) {
    ${({ isWelcomePage }) =>
      isWelcomePage
        ? css`
            background-image: linear-gradient(
                170deg,
                #040404 3.66%,
                rgba(4, 4, 4, 0) 19.15%
              ),
              linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
              url(${bgMobilep1});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: top;
            width: 320px;
            height: 609px;

            @media screen and (min-device-pixel-radio: 2) and (min-width: 320px),
              screen and (min-resolution: 192dpi) and (min-width: 320px),
              screen and (min-resolution: 2dppx) and (min-width: 320px) {
              background-image: linear-gradient(
                  170deg,
                  #040404 3.66%,
                  rgba(4, 4, 4, 0) 19.15%
                ),
                linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                url(${bgMobilep2});
            }
          `
        : css`
            background-image: linear-gradient(
                168deg,
                rgb(4, 4, 4) 14.75%,
                rgba(4, 4, 4, 0) 52.97%
              ),
              linear-gradient(
                73deg,
                rgb(4, 4, 4) 6.11%,
                rgba(4, 4, 4, 0) 66.68%
              ),
              url(${bgMobilep1});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: top;
            width: 320px;
            height: 609px;

            @media screen and (min-device-pixel-radio: 2) and (min-width: 320px),
              screen and (min-resolution: 192dpi) and (min-width: 320px),
              screen and (min-resolution: 2dppx) and (min-width: 320px) {
              background-image: linear-gradient(
                  168deg,
                  #040404 14.75%,
                  rgba(4, 4, 4, 0) 52.97%
                ),
                linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
                url(${bgMobilep2});
            }
          `}
  }
  @media screen and (min-width: 375px) {
    flex-shrink: 0;
  }

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        170deg,
        #040404 3.66%,
        rgba(4, 4, 4, 0) 19.15%
      ),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${bgTablet1});
    background-repeat: no-repeat;
    background-size: contain;
    width: 670px;
    height: 1005px;
    background-position: left;
    position: absolute;
    margin-left: 300px;
    margin-top: 100px;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 768px),
      screen and (min-resolution: 192dpi) and (min-width: 768px),
      screen and (min-resolution: 2dppx) and (min-width: 768px) {
      background-image: linear-gradient(
          168deg,
          #040404 14.75%,
          rgba(4, 4, 4, 0) 52.97%
        ),
        linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
        url(${bgTablet2});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: linear-gradient(
        80deg,
        #040404 -2.45%,
        rgba(4, 4, 4, 0) 68.17%
      ),
      url(${bgDesktop1});
    width: 670px;
    height: 800px;
    margin: 0;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 1440px),
      screen and (min-resolution: 192dpi) and (min-width: 1440px),
      screen and (min-resolution: 2dppx) and (min-width: 1440px) {
      background-image: linear-gradient(
          80deg,
          #040404 -2.45%,
          rgba(4, 4, 4, 0) 68.17%
        ),
        url(${bgDesktop2});
      background-position: right;
      margin: 0;
    }
  }
`;

export const VideoWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 146px;
  height: 66px;
  background-color: ${globalColor.colorSecondaryGrey};
  flex-shrink: 0;
  border-radius: 12px;
  padding: 14px 18px;
  margin-top: 344px;
  margin-left: 48px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 206px;
    height: 96px;
    padding: 20px 23px 20px 36px;
    margin-top: 670px;
    margin-left: 0px;
  }

  @media screen and (min-width: 1440px) {
    top: 47%;
    right: 70%;
    width: 206px;
    height: 96px;
    padding: 20px 23px 20px 36px;
    margin-top: 0;
    margin-left: 0;
  }
`;

export const WrapperSvg = styled.div`
  padding: 8px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: ${globalColor.colorOrange1};
  margin-right: 8px;
  text-align: center;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    padding: 10px;
    margin-top: 8px;
  }

  @media screen and (min-width: 1440px) {
    width: 40px;
    height: 40px;
    margin-top: 8px;
    margin-right: 12px;
    padding: 10px;
  }
`;

export const SvgPlay = styled.svg`
  width: 14px;
  height: 14px;
  fill: ${globalColor.colorWhite};

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 20px;
    height: 20px;
  }
`;

export const Svg = styled.svg`
  @media screen and (min-width: 320px) {
    width: 12px;
    height: 12px;
    fill: ${globalColor.colorWhite};
  }

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const VideoNumber = styled.p`
  margin-bottom: 8px;
  color: ${globalColor.colorWhite};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const VideoText = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const TextWrapper = styled.div`
  @media screen and (min-width: 320px) {
    position: absolute;
    width: 100px;
    height: 76px;
    border-radius: 12px;
    background-color: ${globalColor.colorOrange1};
    padding: 14px 18px;
    margin-top: 484px;
    margin-left: 170px;
  }

  @media screen and (min-width: 375px) {
    width: 119px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 180px;
    height: 110px;
    flex-shrink: 0;
    padding: 14px 28px 14px 38px;
    margin-top: 830px;
    margin-left: 275px;
  }

  @media screen and (min-width: 1440px) {
    top: 65%;
    right: 5%;
    width: 180px;
    height: 110px;
    margin-top: 0;
    margin-left: 0;
  }
`;

export const WrapperTextSvg = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${globalColor.colorBeige};
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const WrapperDescription = styled.div`
  display: flex;
  align-items: baseline;
  gap: 11px;
`;

export const TextNumber = styled.p`
  color: ${globalColor.colorWhite};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -1px;
  text-transform: uppercase;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 50px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const TextDescription = styled.span`
  color: rgba(239, 237, 232, 0.65);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
