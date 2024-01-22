import styled from 'styled-components';

export const SubCatItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 16px;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;
