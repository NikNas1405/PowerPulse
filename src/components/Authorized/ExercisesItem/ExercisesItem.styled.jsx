import styled from 'styled-components';
// import { globalColor } from '../../../styles/root';

export const ExerciseCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  height: 141px;
  border: 1px solid white;
  border-radius: 12px;
  padding: 16px;
  gap: 8px;

  @media (min-width: 768px) {
    /* gap: 32px 16px; */
  }
`;

export const ExerciseCardDownBlock = styled.div`
  display: flex;
  align-items: end;
  gap: 16px;
  margin-top: 8px;
  color: rgba(239, 237, 232, 0.4);
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  @media (min-width: 768px) {
    /* gap: 32px 16px; */
  }
`;

export const ExerciseCardMiddleBlock = styled.div`
  display: flex;
  gap: 16px;

  @media (min-width: 768px) {
    /* gap: 32px 16px; */
  }
`;

export const ExerciseCardTopBlock = styled.div`
  display: flex;
  gap: 16px;

  @media (min-width: 768px) {
    /* gap: 32px 16px; */
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  color: orange;
  gap: 8px;
  width: 49px;
  height: 18px;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;

  font-size: 14px;
  line-height: 1.2857;
  word-wrap: break-word;

  @media (min-width: 768px) {
    width: 53px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Value = styled.span`
  color: rgba(239, 237, 232, 1);
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
`;
