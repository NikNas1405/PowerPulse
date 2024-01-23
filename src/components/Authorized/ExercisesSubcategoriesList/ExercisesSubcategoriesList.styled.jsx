import styled from 'styled-components';

export const SubCatItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  & > div {
    height: 140rem;
  }

  @media (min-width: 768px) {
    gap: 16px;
    & > div {
      height: 40rem;
    }
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    & > div {
      height: 30rem;
    }
  }
`;
