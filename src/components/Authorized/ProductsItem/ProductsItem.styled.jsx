import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

export const ProductsItemStyled = styled.li`
  width: 335px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: rgba(239, 237, 232, 0.05);
  border-radius: 12px;
  border: 1px rgba(239, 237, 232, 0.2) solid;

  @media (min-width: 1440px) {
    width: 405px;
  }
`;

export const DietSpan = styled.div`
  position: absolute;
  padding: 5px 7.5px;
  background: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  word-wrap: break-word;
`;

export const SvgWrapper = styled.svg`
  width: 14px;
  height: 14px;
`;

// export const Nothing = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
//   width: 100%;
//   margin-top: 64px;

//   @media (min-width: 375px) {
//     width: 335px;
//   }

//   @media (min-width: 768px) {
//     margin-top: 132px;
//     width: 580px;
//   }

//   @media (min-width: 1440px) {
//     margin-top: 136px;
//   }
// `;

// export const Parag1 = styled.p`
//   line-height: 1.2857;
//   word-wrap: break-word;
//   color: ${globalColor.colorInput};

//   > span {
//     color: ${globalColor.colorOrange};
//   }

//   @media (min-width: 768px) {
//     line-height: 1.5;
//     font-weight: 16px;
//   }
// `;

// export const Parag2 = styled.p`
//   line-height: 1.2857;
//   word-wrap: break-word;
//   color: ${globalColor.colorOrange};

//   @media (min-width: 768px) {
//     line-height: 1.5;
//     font-weight: 16px;
//   }
// `;
