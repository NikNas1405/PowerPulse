import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { globalColor } from '../../../styles/root';

export const Card = styled.div`
  /* display: flex; */
  align-items: center;
  gap: 10px;
  margin: 10px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
`;

export const ExCat = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  color: white;
  /* max-height: 40px; */
  width: 1440px;
  /* justify-content: flex-start; */
  margin: 10px;
`;

export const CategoryLink = styled(Link)`
  color: ${globalColor.colorWhite};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.167;
  word-wrap: break-word;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 1.375;
  }

  @media (max-width: 374px) {
    font-size: 18px;
  }
`;
