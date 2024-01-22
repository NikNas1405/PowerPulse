import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { globalColor } from '../../../styles/root';

// export const Card = styled.div`
//   /* display: flex; */
//   /* align-items: center; */
//   gap: 10px;
//   margin: 10px;
//   border: 2px solid black;
//   border-radius: 5px;
//   padding: 5px;
// `;

// export const CardBlock = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin: 10px;
// `;

export const ExCat = styled.ul`
  display: flex;
  /* margin-top: 20px;
  margin-bottom: 40px; */
  gap: 10px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const CategoryLink = styled(Link)`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  word-wrap: break-word;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  @media (max-width: 374px) {
    font-size: 18px;
  }
`;
