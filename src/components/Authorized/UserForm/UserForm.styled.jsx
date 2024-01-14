import styled from 'styled-components';

import { Field, Form, ErrorMessage } from 'formik';

export const ProfileContainer = styled(Form)`
  /* margin-right: 10px;
  margin-bottom: 40px; */
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
`;

export const ProfileField = styled(Field)`
  padding: 5px;
`;

export const ActiveRadioForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0 0 0;
  @media (min-width: 834px) {
    width: 438px;
    margin: 24px auto 0 auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    margin: 24px 0 0 0;
  }
`;

export const ActiveRadio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 834px) {
    width: 438px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: column;
  }
`;

export const ActivLabel = styled.label`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
  @media (min-width: 834px) {
    letter-spacing: 0.01em;
  }
`;

export const ActivField = styled(Field)`
  appearance: none;

  min-width: 12px;
  min-height: 12px;

  font: inherit;
  color: green;
  background-color: black;

  border: 0.11em solid gray;
  border-radius: 50%;

  &:checked {
    background: radial-gradient(circle, green, transparent 50%);
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
`;
