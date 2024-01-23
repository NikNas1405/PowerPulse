import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

export const ExercisesListWrapper = styled.div`
  list-style: none;
  overflow: auto;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    height: 660px;
    width: 704px;
    gap: 32px 16px;
  }

  @media (min-width: 1440px) {
    height: 487px;
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
