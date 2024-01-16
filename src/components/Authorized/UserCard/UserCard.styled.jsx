import styled, { css } from 'styled-components';
import { globalColor } from '../../../styles/root';

export const ProfileContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 78px;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 78px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 834px) {
    width: 219px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  background-color: rgba(48, 48, 48, 0.3);
  border: 1px solid #e6533c;
  width: 90px;
  height: 90px;
  object-fit: cover;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 31px;
`;

export const AvatarUpload = styled.div`
  display: flex;
  align-items: center;
`;

export const InputFile = styled.input`
  display: none;
`;

export const UserName = styled.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const ActivityBoxes = styled.div`
  display: flex;
  gap: 14px;
  margin: 0 auto;
`;

export const TextWrapper = styled.div`
  @media screen and (min-width: 320px) {
    width: 157px;
    height: 96px;
    border-radius: 12px;
    background-color: #e6533c;
    padding: 14px 18px;
  }

  @media screen and (min-width: 375px) {
    width: 157px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 209px;
    height: 108px;
    /* flex-shrink: 0; */
    /* padding: 14px 28px 14px 38px; */
    /* margin: 0 auto; */
  }

  @media screen and (min-width: 1440px) {
    top: 65%;
    right: 5%;
    width: 214px;
    height: 108px;
    margin-top: 0;
    margin-left: 0;
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
    font-size: 18px;
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

export const SectionText = styled.p`
  margin: 0 auto;
  margin-top: 40px;
  color: rgba(239, 237, 232, 0.3);

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
