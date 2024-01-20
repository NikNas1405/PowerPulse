import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  BgWrapper,
  ButtonSignUp,
  ErrorSpan,
  Form,
  FormContainer,
  FormDescription,
  FormInput,
  FormLabel,
  FormTitle,
  FormWrapper,
  ImageToggle,
  LabelWrapper,
  SignInLink,
  SvgError,
  Text,
  WrapperText,
} from './SignInForm.styled';
import { useState } from 'react';
import { StatisticsInfo } from '../StatisticsInfo/StatisticsInfo';
import sprite from '../../../assets/sprite.svg';
import { StyleSheetManager } from 'styled-components';
import { logIn } from '../../../redux/auth/operations';
import { Logo } from '../../Logo/Logo';
import { Container } from '../../../styles/GlobalStyles';

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isValidationCompleted, setIsValidationCompleted] = useState(false);

  const dispatch = useDispatch();

  const shouldForwardProp = (prop) => !['isValidationCompleted'].includes(prop);

  const toggleCheckboxChange = () => {
    setShowPassword(!showPassword);
    setIsValidationCompleted(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Example: test@gmail.com')
        .email('Invalid email')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'at least 6 characters')
        .required('Password is required'),
    }),

    onSubmit: (values) => {
      console.log(values);
      dispatch(
        logIn({
          email: values.email,
          password: values.password,
        })
      );
      formik.resetForm();
    },
  });

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Container>
        <FormContainer>
          <FormWrapper>
            <Logo />
            <FormTitle>Sign in</FormTitle>
            <FormDescription>
              Welcome! Please enter your credentials to login to the platform:
            </FormDescription>
            <Form autoComplete="off" onSubmit={formik.handleSubmit}>
              <LabelWrapper>
                <FormLabel>
                  <FormInput
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    haserror={
                      !isValidationCompleted &&
                      formik.touched.email &&
                      formik.errors.email
                    }
                    isValidationCompleted={
                      !formik.errors.email && formik.touched.email
                    }
                  />
                  {formik.touched.email && (
                    <ErrorSpan
                      style={{
                        color: formik.errors.email ? '#D80027' : '#3CBF61',
                      }}
                    >
                      {formik.errors.email ? (
                        <>
                          <SvgError>
                            <use href={`${sprite}#icon-red`}></use>
                          </SvgError>
                          {`Error email. ${formik.errors.email}`}
                        </>
                      ) : (
                        <>
                          <SvgError>
                            <use href={`${sprite}#icon-green`}></use>
                          </SvgError>
                          {'Success email'}
                        </>
                      )}
                    </ErrorSpan>
                  )}
                </FormLabel>

                <FormLabel>
                  <FormInput
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    haserror={
                      !isValidationCompleted &&
                      formik.touched.password &&
                      formik.errors.password
                    }
                    isValidationCompleted={
                      !formik.errors.password && formik.touched.password
                    }
                  />
                  <>
                    {showPassword ? (
                      <ImageToggle onClick={toggleCheckboxChange}>
                        <use href={`${sprite}#icon-eye`}></use>
                      </ImageToggle>
                    ) : (
                      <ImageToggle onClick={toggleCheckboxChange}>
                        <use href={`${sprite}#icon-eye-off`}></use>
                      </ImageToggle>
                    )}
                  </>
                  {formik.touched.password && (
                    <ErrorSpan
                      style={{
                        color: formik.errors.password ? '#D80027' : '#3CBF61',
                      }}
                    >
                      {formik.errors.password ? (
                        <>
                          <SvgError>
                            <use href={`${sprite}#icon-red`}></use>
                          </SvgError>
                          {`Error password, ${formik.errors.password}`}
                        </>
                      ) : (
                        <>
                          <SvgError>
                            <use href={`${sprite}#icon-green`}></use>
                          </SvgError>
                          {'Success password'}
                        </>
                      )}
                    </ErrorSpan>
                  )}
                </FormLabel>
              </LabelWrapper>
              <ButtonSignUp type="Submit">Sign In</ButtonSignUp>
            </Form>
            <WrapperText>
              <Text>Don’t have an account?</Text>
              <SignInLink to={'/signup'}>Sing Up</SignInLink>
            </WrapperText>
          </FormWrapper>
          <BgWrapper>
            <StatisticsInfo />
          </BgWrapper>
        </FormContainer>
      </Container>
    </StyleSheetManager>
  );
};
