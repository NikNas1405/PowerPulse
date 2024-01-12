import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
`;

export const FormWrapper = styled.div`
  width: 55%;
  /* margin-right: 178px; */
`;

export const FormTitle = styled.h2`
  color: #efede8;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 16px;
  margin-top: 151px;
`;

export const FormDescription = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 32px;
  width: 496px;
`;

export const Form = styled.form`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 20px; */
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormLabel = styled.label`
  position: relative;
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  width: 364px;
`;

export const FormInput = styled.input`
  /* border: 1px solid rgba(239, 237, 232, 0.3); */
  color: rgba(239, 237, 232, 0.6);
  padding: 14px;
  border-radius: 12px;
  width: 364px;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  background-color: transparent;
  outline: none;
  transition: border-color 0.3s;

  /* ${({ hasError, isValidationCompleted, ...rest }) => css`
    border: 1px solid
      ${hasError
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
  `} */

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
  width: 16px;
  height: 16px;
`;

export const ImageToggle = styled.svg`
  position: absolute;
  top: 30%;
  right: 5%;
  display: inline-block;
  width: 20px;
  height: 20px;
  fill: #efede8;
`;

export const ButtonSignUp = styled.button`
  display: inline-flex;
  padding: 16px 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background-color: #e6533c;
  color: #efede8;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  width: 192px;
  margin-top: 64px;
  outline: none;
  border: transparent;
  margin-bottom: 12px;

  &:hover {
    background-color: #ef8964;
  }

  &:focus {
    background-color: #ef8964;
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
  color: #efede8;
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
