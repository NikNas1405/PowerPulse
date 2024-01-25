import styled, { css, createGlobalStyle } from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { globalColor } from '../../../styles/root';

export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: absolute;
    
  }
 
  .react-datepicker {
    position: relative;
    left: -40%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 9px 18px;
    background-color: ${globalColor.colorOrange1};
    font-family: 'Roboto';
    border-radius: 8px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;

  }
   .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header {
    position: relative;
    background-color:  ${globalColor.colorOrange1};
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    color: ${globalColor.colorWhite};
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    text-align: center;
    position: relative;
    
  }
  .react-datepicker__day-name {
    margin: 0;
    padding: 8px 8px;
    color: rgba(239, 237, 232, 0.50);
    font-family: 'RobotoMedium';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }
  span.react-datepicker__navigation-icon {
    margin-top: 24px;
    display: none;
  }
  .react-datepicker__aria-live {
    display: none;
  }
  button.react-datepicker__navigation {
    background-color: ${globalColor.colorOrange1};
    position: absolute;
    transform: rotate(45deg);
    border: 2px solid ${globalColor.colorWhite};
  }
  .react-datepicker__navigation--previous {
    left: 12px;
    width: 10px;
    height: 10px;
    top: 18px;
  }
  .react-datepicker__navigation--next {
    right: 12px;
    width: 10px;
    height: 10px;
    top: 14px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: ${globalColor.colorWhite};

  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${globalColor.colorWhite};
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: ${globalColor.colorWhite};
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.28px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: ${globalColor.colorBlack};
    color: ${globalColor.colorWhite};
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: ${globalColor.colorWhite};
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: ${globalColor.colorWhite};
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:${globalColor.colorWhite};
    color:#3e85f3;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
   display: none;
  }
  .react-datepicker__header__dropdown--select{
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    gap: 10px;    
  }

   .react-datepicker__month-select,
.react-datepicker__year-select {
  -webkit-appearance: none; 
  -moz-appearance: none; 
  appearance: none; 
  background-color: ${globalColor.colorOrange1};
  border: 1px solid ${globalColor.colorBeige};
  border-radius: 2px;
  color: ${globalColor.colorWhite};
  outline: none;

  & > option {
    color: ${globalColor.colorBlack};
    background-color: ${globalColor.colorWhite};
  }
}
`;

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
  position: relative;

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

export const SvgCalendar = styled.svg`
  stroke: rgba(239, 237, 232, 1);
  width: 18px;
  height: 18px;
  position: absolute;
  top: 35px;
  right: 13px;
  cursor: pointer;
  transition: stroke 0.3s ease;

  &:hover,
  &:focus {
    stroke: ${globalColor.colorOrange1};
  }

  @media (min-width: 768px) {
    top: 36px;
    right: -10px;
  }

  @media (min-width: 1440px) {
    top: 40px;
    right: 15px;

    &:hover {
      stroke: ${globalColor.colorOrange1};
    }
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

  @media (min-width: 768px) {
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
    transition: background-color 0.3s ease;

    &:hover,
    &:focus {
      background-color: ${globalColor.colorOrange1};
    }

    &:disabled {
      background-color: ${globalColor.colorInput};
    }
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    &:disabled {
      background-color: ${globalColor.colorInput};
    }
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
    &:disabled {
      background-color: ${globalColor.colorInput};
    }
  }
`;
