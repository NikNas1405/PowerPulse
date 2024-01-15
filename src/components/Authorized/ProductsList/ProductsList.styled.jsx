import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

// export const ProductsListStyled = styled.ul`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;

//   @media (min-width: 768px) {
//     height: 660px;
//     overflow: auto;
//     gap: 32px 16px;
//   }

//   @media (min-width: 1440px) {
//     height: 487px;
//   }
// `;

export const ProductsListStyled = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px 16px;
  }
`;

export const Nothing = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 64px;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    margin-top: 132px;
    width: 580px;
  }

  @media (min-width: 1440px) {
    margin-top: 136px;
  }
`;

export const Parag1 = styled.p`
  line-height: 1.2857;
  word-wrap: break-word;
  color: ${globalColor.colorInput};

  > span {
    color: ${globalColor.colorOrange};
  }

  @media (min-width: 768px) {
    line-height: 1.5;
    font-weight: 16px;
  }
`;

export const Parag2 = styled.p`
  line-height: 1.2857;
  word-wrap: break-word;
  color: ${globalColor.colorOrange};

  @media (min-width: 768px) {
    line-height: 1.5;
    font-weight: 16px;
  }
`;
