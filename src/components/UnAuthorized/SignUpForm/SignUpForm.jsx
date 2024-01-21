import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  ButtonSignUp,
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
  Text,
  WrapperText,
  ErrorSpan,
  SvgError,
  BgWrapper,
} from './SignUpForm.styled';
import { useState } from 'react';
import { StyleSheetManager } from 'styled-components';
import { StatisticsInfo } from '../StatisticsInfo/StatisticsInfo';
import sprite from '../../../assets/sprite.svg';
import { register } from '../../../redux/auth/operations';
import { Logo } from '../../Logo/Logo';
import { Container } from '../../../styles/GlobalStyles';

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isValidationCompleted, setIsValidationCompleted] = useState(false);

  const dispatch = useDispatch();

  const shouldForwardProp = (prop) =>
    !['isValidationCompleted', 'haserror'].includes(prop);

  const toggleCheckboxChange = () => {
    setShowPassword(!showPassword);
    setIsValidationCompleted(false);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Example: test@gmail.com')
        .email('Invalid email')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Enter a valid Password')
        .required('Password is required'),
    }),

    onSubmit: (values) => {
      console.log(values);
      dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Container>
        <FormContainer>
          <FormWrapper>
            <Logo />
            <FormTitle>Sign up</FormTitle>
            <FormDescription>
              Thank you for your interest in our platform. To complete the
              registration process, please provide us with the following
              information.
            </FormDescription>
            <Form autoComplete="off" onSubmit={formik.handleSubmit}>
              <LabelWrapper>
                <FormLabel>
                  <FormInput
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    haserror={
                      !isValidationCompleted &&
                      formik.touched.name &&
                      formik.errors.name
                    }
                    isValidationCompleted={
                      !formik.errors.name && formik.touched.name
                    }
                  />
                  {formik.touched.name && (
                    <ErrorSpan
                      style={{
                        color: formik.errors.name ? '#D80027' : '#3CBF61',
                      }}
                    >
                      {formik.errors.name ? (
                        <>
                          <SvgError>
                            <use href={`${sprite}#icon-red`}></use>
                          </SvgError>
                          {`Error name, ${formik.errors.name}`}
                        </>
                      ) : (
                        <>
                          <SvgError>
                            <use href={`${sprite}#icon-green`}></use>
                          </SvgError>
                          {'Success name'}
                        </>
                      )}
                    </ErrorSpan>
                  )}
                </FormLabel>

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
              <ButtonSignUp type="Submit">Sign Up</ButtonSignUp>
            </Form>

            <WrapperText>
              <Text>Already have an account?</Text>
              <SignInLink to={'/signin'}>Sing In</SignInLink>
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
