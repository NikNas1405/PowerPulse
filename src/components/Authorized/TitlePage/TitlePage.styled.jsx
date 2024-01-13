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
