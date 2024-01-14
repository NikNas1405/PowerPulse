import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

export const Title = styled.h1`
  color: ${globalColor.colorWhite};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.167;
  word-wrap: break-word;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 1.375;
  }
`;

export const Wrapper = styled.section`
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
