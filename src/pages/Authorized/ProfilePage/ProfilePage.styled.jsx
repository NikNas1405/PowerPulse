import styled, { css } from 'styled-components';

export const ProfileContainer = styled.div`
  padding-top: 72px;
`;

export const ProfileComponentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 20px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 60%;
    transform: translateX(-50%);
    width: 1px;
    background-color: rgba(239, 237, 232, 0.2);
    display: none; /* Початково приховуємо лінію */
  }

  @media (min-width: 1440px) {
    &:before {
      display: block; /* Показуємо лінію на десктопі */
    }
  }

  @media (max-width: 1439px) {
    flex-direction: column-reverse;
  }
`;
