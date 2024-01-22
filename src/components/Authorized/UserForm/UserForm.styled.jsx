import styled, { css } from 'styled-components';

import { Field, Form, ErrorMessage } from 'formik';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { globalColor } from '../../../styles/root';

export const ProfileContainer = styled.div`
  display: flex;
`;

export const FormLabel = styled.label`
  position: relative;
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  /* width: 364px; */

  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  flex-direction: column;

  /* @media screen and (min-width: 768px) {
    width: 317px;
  } */

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LabelWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const DataWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const FormInput = styled.input`
  @media screen and (min-width: 320px) {
    width: 300px;
    color: white;
    color: rgba(239, 237, 232, 0.6);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    background-color: transparent;
    outline: none;
    padding: 14px;
    border-radius: 12px;

    ${({ haserror, isValidationCompleted, ...rest }) => css`
      border: 1px solid
        ${haserror
          ? `${globalColor.colorSecondaryRed}`
          : isValidationCompleted
          ? `${globalColor.colorSecondaryGreen}`
          : `${globalColor.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    color: white;
    width: 335px;
    ${({ haserror, isValidationCompleted, ...rest }) => css`
      border: 1px solid
        ${haserror
          ? `${globalColor.colorSecondaryRed}`
          : isValidationCompleted
          ? `${globalColor.colorSecondaryGreen}`
          : `${globalColor.colorInput}`};
    `}
  }

  @media screen and (min-width: 768px) {
    width: 341px;
  }

  @media screen and (min-width: 1440px) {
    color: white;
    padding: 14px;
    font-size: 16px;
    line-height: 24px;
    transition: border-color 0.3s;
    width: 341px;

    ${({ haserror, isValidationCompleted }) => css`
      border: 1px solid
        ${haserror
          ? `${globalColor.colorSecondaryRed}`
          : isValidationCompleted
          ? `${globalColor.colorSecondaryGreen}`
          : `${globalColor.colorInput}`};

      &:hover,
      &:focus {
        ${!isValidationCompleted &&
        `
        border: 1px solid ${globalColor.colorOrange};
      `}
      }
    `}
  }
`;

export const ParamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 320px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 375px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const ParamsLabel = styled.label`
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  width: 161px;
  max-width: 364px;
  text-align: left;

  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const ParamsInput = styled.input`
  @media screen and (min-width: 320px) {
    width: 161px;
    color: white;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    background-color: transparent;
    outline: none;
    padding: 14px;
    border-radius: 12px;
    margin-top: 4px;

    &[type='number'] {
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -moz-appearance: textfield;
      }
    }

    ${({ haserror, isValidationCompleted, ...rest }) => css`
      border: 1px solid
        ${haserror
          ? `${globalColor.colorSecondaryRed}`
          : isValidationCompleted
          ? `${globalColor.colorSecondaryGreen}`
          : `${globalColor.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    color: white;
    width: 161px;
    ${({ haserror, isValidationCompleted, ...rest }) => css`
      border: 1px solid
        ${haserror
          ? `${globalColor.colorSecondaryRed}`
          : isValidationCompleted
          ? `${globalColor.colorSecondaryGreen}`
          : `${globalColor.colorInput}`};
    `}
  }

  @media screen and (min-width: 768px) {
    color: white;
    width: 168px;
  }

  @media screen and (min-width: 1440px) {
    color: white;
    padding: 14px;
    font-size: 16px;
    line-height: 24px;
    transition: border-color 0.3s;
    width: 168px;

    ${({ haserror, isValidationCompleted }) => css`
      border: 1px solid
        ${haserror
          ? `${globalColor.colorSecondaryRed}`
          : isValidationCompleted
          ? `${globalColor.colorSecondaryGreen}`
          : `${globalColor.colorInput}`};

      &:hover,
      &:focus {
        ${!isValidationCompleted &&
        `
        border: 1px solid ${globalColor.colorOrange};
      `}
      }
    `}
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 161px;
  color: white;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  background-color: transparent;
  outline: none;
  padding: 14px;
  border-radius: 12px;
  margin-top: 4px;

  ${({ haserror, isValidationCompleted, ...rest }) => css`
    border: 1px solid
      ${haserror
        ? `${globalColor.colorSecondaryRed}`
        : isValidationCompleted
        ? `${globalColor.colorSecondaryGreen}`
        : `${globalColor.colorInput}`};
  `}

  @media screen and (min-width: 768px) {
    color: white;
    width: 187px;
  }

  @media screen and (min-width: 1440px) {
    color: white;
    width: 160px;
    padding: 14px;
    font-size: 16px;
    line-height: 24px;
    transition: border-color 0.3s;

    ${({ haserror, isValidationCompleted }) => css`
      border: 1px solid
        ${haserror
          ? `${globalColor.colorSecondaryRed}`
          : isValidationCompleted
          ? `${globalColor.colorSecondaryGreen}`
          : `${globalColor.colorInput}`};

      &:hover,
      &:focus {
        ${!isValidationCompleted &&
        `
        border: 1px solid ${globalColor.colorOrange};
      `}
      }
    `}
  }
`;

export const ActiveRadioForm = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 21px;
  @media (min-width: 834px) {
    /* width: 438px;
    margin: 24px auto 0 auto; */
  }
  @media (min-width: 1440px) {
    /* width: none;
    margin: 24px 0 0 0;
    gap: 8px; */
  }
`;

export const ActiveRadio = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media (min-width: 834px) {
    /* width: 438px; */
    flex-direction: row;
    /* justify-content: space-between; */
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: row;
  }
`;

export const ActiveLabel = styled.label`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.06em;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
  @media (min-width: 834px) {
    letter-spacing: 0.01em;
  }
`;

export const ActiveField = styled(Field)`
  appearance: none;

  min-width: 12px;
  min-height: 12px;

  font: inherit;
  color: green;
  background-color: black;

  border: 0.11em solid gray;
  border-radius: 50%;

  &:checked {
    background: radial-gradient(
      circle,
      ${globalColor.colorOrange},
      transparent 50%
    );
    border: 0.11em solid ${globalColor.colorOrange};
  }
`;

export const StyledError = styled(ErrorMessage)`
  color: #d80027;
  position: relative;
  font-size: 12px;

  &::before {
    content: '✖';
    display: inline-block;
    font-size: 12px;
    color: #d80027;
    margin-right: 5px;
  }
`;

export const ActivityRadio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 834px) {
    width: 438px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (min-width: 1440px) {
    text-align: left;
    flex-direction: row;
  }
`;

export const ButtonSave = styled.button`
  @media screen and (min-width: 320px) {
    position: sticky;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 140px;
    border-radius: 12px;
    background-color: ${globalColor.colorOrange};
    color: ${globalColor.colorWhite};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    outline: none;
    border: transparent;
    margin-top: 28px;
    margin-bottom: 12px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }

  @media screen and (min-width: 1440px) {
    display: inline-flex;
    padding: 16px 60px;
    font-size: 20px;
    line-height: 24px;
    width: 192px;

    &:hover,
    &:focus {
      background-color: ${globalColor.colorOrange1};
    }
  }
`;
