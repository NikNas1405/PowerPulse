import styled from '@emotion/styled';
import { globalColor } from '../../../styles/root';

import bgDesktop1 from '../../../assets/exercises/trainingGym-1.jpg';
import bgDesktop2 from '../../../assets/exercises/trainingGym-1@2x.jpg';

export const ContainerExPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 20px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;

    margin-top: 78px;
    margin-bottom: 70px;
  }

  @media (max-width: 374px) {
  }
`;
export const Block = styled.div`
  text-align: center;
`;

export const ExerPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const BackButton = styled.a`
  display: flex;
  align-items: center;
  padding-top: 10px;
  gap: 8px;
  color: ${globalColor.colorInput};
  line-height: 1.2357;
  word-wrap: break-word;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    padding-top: 32px;
  }

  > svg {
    stroke: ${globalColor.colorInput};
    width: 16px;
    height: 16px;
    transition: stroke 0.3s ease;
  }

  &:hover {
    color: ${globalColor.colorOrange1};
    cursor: pointer;

    > svg {
      stroke: ${globalColor.colorOrange1};
      width: 16px;
      height: 16px;
    }
  }
`;

export const BackGroundStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    /* background-image: ${(props) =>
      props.isexerciselist === 'true'
        ? 'linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%), url(${bgDesktop1})'
        : 'unset'}; */
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${bgDesktop1});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${bgDesktop2});
  }
`;
