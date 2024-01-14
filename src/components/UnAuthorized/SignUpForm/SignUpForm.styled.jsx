import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { globalColor } from '../../../styles/root';

export const FormContainer = styled.div`
  display: flex;
  position: relative;
`;

export const FormWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    width: 55%;
    margin-right: 178px;
  }
`;

export const FormTitle = styled.h2`
  @media screen and (min-width: 320px) {
    color: ${globalColor.colorWhite};
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    margin-top: 90px;
    margin-bottom: 14px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    margin-top: 140px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 151px;
  }
`;

export const FormDescription = styled.p`
  @media screen and (min-width: 320px) {
    width: 335px;
    color: rgba(239, 237, 232, 0.3);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 28px;
    position: sticky;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    width: 496px;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 496px;
  }
`;

export const Form = styled.form``;

export const LabelWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const FormLabel = styled.label`
  position: relative;
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  width: 364px;
`;

export const FormInput = styled.input`
  @media screen and (min-width: 320px) {
    width: 300px;
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
          ? '#D80027'
          : isValidationCompleted
          ? '#3CBF61'
          : 'rgba(239, 237, 232, 0.3)'};
    `}
  }

  @media screen and (min-width: 375px) {
    width: 335px;
    ${({ haserror, isValidationCompleted, ...rest }) => css`
      border: 1px solid
        ${haserror
          ? '#D80027'
          : isValidationCompleted
          ? '#3CBF61'
          : 'rgba(239, 237, 232, 0.3)'};
    `}
  }

  @media screen and (min-width: 768px) {
    width: 364px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px;
    border-radius: 12px;
    width: 364px;
    font-size: 16px;
    line-height: 24px;
    transition: border-color 0.3s;

    ${({ haserror, isValidationCompleted, ...rest }) => css`
      border: 1px solid
        ${haserror
          ? '#D80027'
          : isValidationCompleted
          ? '#3CBF61'
          : 'rgba(239, 237, 232, 0.3)'};

      &:hover,
      &:focus {
        ${!isValidationCompleted &&
        `
        border: 1px solid #e6533c;
      `}
      }
    `}
  }
`;

export const ErrorSpan = styled.div`
  display: flex;
  gap: 4px;
  position: absolute;
  bottom: -35%;
  left: 0%;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.12px;
`;

export const SvgError = styled.svg`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
  width: 16px;
  height: 16px;
`;

export const ImageToggle = styled.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  fill: ${globalColor.colorWhite};

  @media screen and (min-width: 320px) {
    top: 30%;
    right: 10%;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    right: 5%;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ButtonSignUp = styled.button`
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

export const WrapperText = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Text = styled.p`
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

export const SignInLink = styled(NavLink)`
  color: ${globalColor.colorWhite};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: underline;
`;

export const BgWrapper = styled.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    z-index: -1;
    top: 40%;
    left: 20%;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    top: 15%;
    left: 5%;
  }
`;
