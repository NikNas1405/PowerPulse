import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from 'moment';
import { Formik, Form } from 'formik';
import { getCurrentUser, updateUser } from '../../../redux/settings/operations';
import { toast } from 'react-toastify';

import {
  ProfileContainer,
  ActiveRadioForm,
  ActiveRadio,
  StyledError,
  LabelWrapper,
  FormLabel,
  FormInput,
  ParamsInput,
  ParamsLabel,
  ParamsWrapper,
  StyledDatePicker,
  ActiveField,
  ActiveLabel,
  ActivityRadio,
  ButtonSave,
  DataWrapper,
  CalendarGlobalStyles,
  SvgCalendar,
} from './UserForm.styled';

import * as Yup from 'yup';
import sprite from '../../../assets/sprite.svg';

const today = moment().format('YYYY-MM-DD');

export const ProfileSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  height: Yup.number()
    .label('Height')
    .min(150, 'Height must be a number greater than or equal to 150')
    .required('Height is required'),
  currentWeight: Yup.number()
    .label('Current Weight')
    .min(35, 'Current Weight must be a number greater than or equal to 35')
    .required('Current Weight is required'),
  desiredWeight: Yup.number()
    .label('Desired Weight')
    .min(35, 'Desired Weight must be a number greater than or equal to 35')
    .required('Desired Weight is required'),
  blood: Yup.number()
    .label('Blood Type')
    .oneOf([1, 2, 3, 4, '1', '2', '3', '4'], 'Invalid Blood Type')
    .required('Blood Type is required'),
  sex: Yup.string()
    .label('Gender')
    .oneOf(['male', 'female'], 'Invalid Gender')
    .required('Gender is required'),
  levelActivity: Yup.number()
    .label('Level of Activity')
    .oneOf(
      [1, 2, 3, 4, 5, '1', '2', '3', '4', '5'],
      'Invalid Level of Activity'
    )
    .required('Level of Activity is required'),

  birthday: Yup.string()
    .label('Date of Birth')
    // .max(today, "DOB cannot be greater than today's date")
    .typeError('Invalid Date!'),
  // });
});

export const UserForm = ({ profile, refreshUserData }) => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState(profile);

  const [selectedDate, setSelectedDate] = useState(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [defaultBirthday, setDefaultBirthday] = useState(
    profile.birthday ? moment(profile.birthday).format('DD.MM.YYYY') : ''
  );

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const resp = await dispatch(getCurrentUser());
        if (resp.payload.birthday === undefined) {
          resp.payload.birthday = '';
        }
        setUserData(resp.payload);
        refreshUserData(resp.payload);
        // setDefaultBirthday(resp.payload.birthday);
        setDefaultBirthday(
          resp.payload.birthday
            ? moment(resp.payload.birthday).format('DD.MM.YYYY')
            : ''
        );
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('You must be older 18 age');
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (values, props) => {
    if (values.birthday === defaultBirthday) {
      values.birthday = userData.birthday;
      props.setFieldValue('birthday', defaultBirthday);
    }

    try {
      const birthdate = moment(values.birthday, 'DD.MM.YYYY');
      const age = moment().diff(birthdate, 'years');
      if (age < 18) {
        toast.error('You must be at least 18 years old.');
        setIsSubmitted(false);
        return;
      }
      const resp = await dispatch(updateUser(values));
      console.log(resp);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
    // setTimeout(() => {
    //   setIsSubmitted(false);
    // }, 3000);
  };

  return (
    <ProfileContainer>
      <Formik
        initialValues={{
          ...userData,
          birthday: defaultBirthday,
        }}
        enableReinitialize
        validationSchema={ProfileSchema}
        onSubmit={handleSubmit}
      >
        {(props) => {
          return (
            <Form>
              <LabelWrapper>
                <DataWrapper>
                  <FormLabel>
                    Name
                    <FormInput
                      name="name"
                      placeholder="Mike"
                      type="text"
                      onChange={props.handleChange}
                      value={props.values.name}
                    />
                    <StyledError name="name" component="div" />
                  </FormLabel>
                  <FormLabel>
                    Email
                    <FormInput
                      name="email"
                      placeholder="jane@acme.com"
                      type="email"
                      onChange={props.handleChange}
                      value={props.values.email}
                    />
                    <StyledError name="email" component="div" />
                  </FormLabel>
                </DataWrapper>

                <ParamsWrapper>
                  <ParamsLabel>
                    Height
                    <ParamsInput
                      name="height"
                      placeholder="0"
                      type="number"
                      onChange={props.handleChange}
                      value={props.values.height}
                    />
                    <StyledError name="height" component="div" />
                  </ParamsLabel>

                  <ParamsLabel>
                    Current Weight
                    <ParamsInput
                      name="currentWeight"
                      placeholder="0"
                      type="number"
                      onChange={props.handleChange}
                      value={props.values.currentWeight}
                    />
                    <StyledError name="currentWeight" component="div" />
                  </ParamsLabel>

                  <ParamsLabel>
                    Desired Weight
                    <ParamsInput
                      name="desiredWeight"
                      placeholder="0"
                      type="number"
                      onChange={props.handleChange}
                      value={props.values.desiredWeight}
                    />
                    <StyledError name="desiredWeight" component="div" />
                  </ParamsLabel>

                  <ParamsLabel>
                    Date of birth
                    <StyledDatePicker
                      selected={selectedDate}
                      onChange={(date) => {
                        props.handleChange;
                        setSelectedDate(date);
                        props.setFieldValue('birthday', date);
                        props.setFieldTouched('birthday', true);
                      }}
                      dateFormat="dd.MM.yyyy"
                      placeholderText="00.00.00"
                      name="birthday"
                      value={props.values.birthday}
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      calendarStartDay={1}
                      formatWeekDay={(day) => day.substr(0, 1)}
                    />
                    <SvgCalendar>
                      <use href={`${sprite}#icon-calendar`} />
                    </SvgCalendar>
                    <StyledError name="birthday" component="div" />
                    <CalendarGlobalStyles />
                  </ParamsLabel>
                </ParamsWrapper>

                <ActiveRadioForm>
                  <div role="group" aria-labelledby="bloodLevel">
                    <StyledError name="blood" component="div" />

                    <ActiveRadio>
                      Blood
                      <ActiveLabel>
                        <ActiveField
                          type="radio"
                          name="blood"
                          value="1"
                          onChange={props.handleChange}
                          checked={
                            props.values.blood === '1' ||
                            props.values.blood === 1
                          }
                        />
                        1
                      </ActiveLabel>
                      <ActiveLabel>
                        <ActiveField
                          type="radio"
                          name="blood"
                          value="2"
                          onChange={props.handleChange}
                          checked={
                            props.values.blood === '2' ||
                            props.values.blood === 2
                          }
                        />
                        2
                      </ActiveLabel>
                      <ActiveLabel>
                        <ActiveField
                          type="radio"
                          name="blood"
                          value="3"
                          onChange={props.handleChange}
                          checked={
                            props.values.blood === '3' ||
                            props.values.blood === 3
                          }
                        />
                        3
                      </ActiveLabel>
                      <ActiveLabel>
                        <ActiveField
                          type="radio"
                          name="blood"
                          value="4"
                          onChange={props.handleChange}
                          checked={
                            props.values.blood === '4' ||
                            props.values.blood === 4
                          }
                        />
                        4
                      </ActiveLabel>
                    </ActiveRadio>
                  </div>

                  <div role="group" aria-labelledby="genderType">
                    <StyledError name="sex" component="div" />

                    <ActiveLabel>
                      <ActiveField
                        type="radio"
                        name="sex"
                        value="male"
                        checked={props.values.sex === 'male'}
                      />
                      Male
                      <ActiveField
                        type="radio"
                        name="sex"
                        value="female"
                        checked={props.values.sex === 'female'}
                      />
                      Female
                    </ActiveLabel>
                  </div>
                </ActiveRadioForm>

                <ActiveRadioForm role="group" aria-labelledby="activityGroup">
                  <StyledError name="levelActivity" component="div" />

                  <ActivityRadio>
                    <ActiveLabel>
                      <ActiveField
                        type="radio"
                        name="levelActivity"
                        value="1"
                        required
                        onChange={props.handleChange}
                        checked={
                          props.values.levelActivity === '1' ||
                          props.values.levelActivity === 1
                        }
                      />
                      Sedentary lifestyle (little or no physical activity)
                    </ActiveLabel>
                    <ActiveLabel>
                      <ActiveField
                        type="radio"
                        name="levelActivity"
                        value="2"
                        required
                        onChange={props.handleChange}
                        checked={
                          props.values.levelActivity === '2' ||
                          props.values.levelActivity === 2
                        }
                      />
                      Light activity (light excercises/sports 1-3 days per week)
                    </ActiveLabel>
                    <ActiveLabel>
                      <ActiveField
                        type="radio"
                        name="levelActivity"
                        value="3"
                        required
                        onChange={props.handleChange}
                        checked={
                          props.values.levelActivity === '3' ||
                          props.values.levelActivity === 3
                        }
                      />
                      Moderately active (moderate excercises/sports 2-5 days per
                      week){' '}
                    </ActiveLabel>
                    <ActiveLabel>
                      <ActiveField
                        type="radio"
                        name="levelActivity"
                        value="4"
                        required
                        onChange={props.handleChange}
                        checked={
                          props.values.levelActivity === '4' ||
                          props.values.levelActivity === 4
                        }
                      />
                      Very active (intence excercises/sports 6-7 days per week)
                    </ActiveLabel>
                    <ActiveLabel>
                      <ActiveField
                        type="radio"
                        name="levelActivity"
                        value="5"
                        required
                        onChange={props.handleChange}
                        checked={
                          props.values.levelActivity === '5' ||
                          props.values.levelActivity === 5
                        }
                      />
                      Extremely active (very strenous exercises/sports and
                      physical work)
                    </ActiveLabel>
                  </ActivityRadio>
                </ActiveRadioForm>
              </LabelWrapper>

              <ButtonSave type="submit" disabled={isSubmitted}>
                Save
              </ButtonSave>
            </Form>
          );
        }}
      </Formik>
    </ProfileContainer>
  );
};
