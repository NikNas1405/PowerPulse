import styled from 'styled-components';

// export const Container = styled.div`
//   width: 100%;
//   margin: 0 auto;

/* @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  } */
// `;
export const DiaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;
  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`;
export const TitleAndSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;
export const DiaryPageContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
  }
`;
export const WrapperCards = styled.div`
  width: auto;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    order: 1;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;
export const CustomDivForTables = styled.div`
  width: auto;

  @media screen and (min-width: 768px) {
    min-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 826px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
export const DescriptionText = styled.p`
  display: flex;
  font-family: 'RobotoRegular';
  font-size: 14px;
  line-height: 1.29;

  color: white;

  @media screen and (min-width: 768px) {
    width: 561px;

    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    width: 358px;
  }

  @media screen and (max-width: 767px) {
    width: 303px;
    margin-bottom: 40px;
  }
`;
