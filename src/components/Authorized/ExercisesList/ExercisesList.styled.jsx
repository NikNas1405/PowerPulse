import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

export const Wrapper = styled.div`
  overflow: auto;
  margin-top: 32px;

  @media (min-width: 768px) {
    width: 704px;
    height: 70vh;
  }

  @media (min-width: 1440px) {
    width: 850px;
    margin-top: 28px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${globalColor.colorOrange1};
    border-radius: 12px;
  }
`;

export const ExercisesListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px 16px;
  }
`;
