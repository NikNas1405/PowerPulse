import styled from 'styled-components';

import bgDesktop1 from '../../../assets/products/products-bg.jpg';
import bgDesktop2 from '../../../assets/products/products-bg@2x.jpg';
import { globalColor } from '../../../styles/root';

export const Wrapper = styled.div`
  padding: 40px 0 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    padding: 72px 0 48px;
    gap: 32px;
  }

  @media (min-width: 1440px) {
    padding: 72px 0 81px;
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${bgDesktop1});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
    /* background-size: 428px 716px; */
  }

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${bgDesktop2});
  }
`;

export const TitleAndFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    gap: 32px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProductsListWrapper = styled.div`
  overflow: auto;

  @media (min-width: 768px) {
    height: 660px;
    width: 704px;
  }

  @media (min-width: 1440px) {
    height: 487px;
    width: 850px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${globalColor.colorOrange1};
    border-radius: 12px;
  }
`;
