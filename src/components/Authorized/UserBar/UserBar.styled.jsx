import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

export const UserBarConatiner = styled.div`
  display: flex;
  position: relative;
`;

export const UseNavWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-direction: row;
    margin-right: 32px;
  }
`;

export const BtnIconMenu = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-top: 7px;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BtnIconClose = styled.svg`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  stroke: rgba(239, 237, 232, 1);

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-right: 14px;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-right: 16px;
  }
`;

export const AvatarContainer = styled.div`
  border-radius: 50%;
  border: 1px solid ${globalColor.colorOrange};

  @media screen and (min-width: 320px) {
    width: 37px;
    height: 37px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
    padding: 11px;
  }

  @media screen and (min-width: 1440px) {
    width: 46px;
    height: 46px;
    padding: 11px;
  }
`;

export const SvgUserNav = styled.svg`
  @media screen and (min-width: 320px) {
    width: 24px;
    height: 24px;
  }
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }
`;

export const ImageHolder = styled.div`
  border: 1px solid ${globalColor.colorOrange};
  border-radius: 50%;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media screen and (min-width: 320px) {
    width: 37px;
    height: 37px;
  }
  @media screen and (min-width: 768px) {
    margin: 0 4px 0 0;
    overflow: hidden;
    width: 46px;
    height: 46px;
    border: 1px solid ${globalColor.colorOrange};
  }
`;

export const IconAvatarWrapper = styled.svg`
  margin: 0;
  stroke: ${globalColor.colorWhite};
  flex-shrink: 0;
  fill: rgba(48, 48, 48, 0.3);
  stroke-width: 1px;

  width: 24px;
  height: 24px;
`;

export const LogOutWrapper = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1439px) {
    display: none;
  }
  display: flex;
`;
