import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker'; // Додано імпорт
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { getCurrentUser, updateUser } from '../../../redux/settings/operations';

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
} from './UserForm.styled';

import * as Yup from 'yup';

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
  dateOfBirth: Yup.number().label('Date of Birth'),
});

export const UserForm = () => {
  const dispatch = useDispatch();

  const userInitialData = {
    name: 'Jane',
    email: '',
    height: 0,
    currentWeight: 0,
    desiredWeight: 0,
    blood: '1',
    sex: 'female',
    levelActivity: '1',
    dateOfBirth: null,
    avatarURL: '',
  };

  const [userData, setUserData] = useState(userInitialData);

  const [selectedDate, setSelectedDate] = useState(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  // console.log('Start');
  const fetchUserData = async () => {
    // ToDo: connect api + create redux folders
    try {
      const resp = await dispatch(getCurrentUser());
      setUserData(resp.payload);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSubmit = (values) => {
    setIsSubmitted(true);
    console.log(values);
    // TODO UPDATE USER HERE
    try {
      const resp = dispatch(updateUser());
      //setUserData(resp.payload);
      console.log(resp);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
    return false;
  };

  return (
    <ProfileContainer>
      <Formik
        initialValues={userData}
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
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="dd.MM.yyyy"
                      placeholderText="00.00.00"
                    />
                    <StyledError name="fateOfBirth" component="div" />
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

              <ButtonSave type="submit">Save</ButtonSave>
              {isSubmitted && (
                <span className="success-msg">
                  Settings updated successfully
                </span>
              )}
            </Form>
          );
        }}
      </Formik>
    </ProfileContainer>
  );
};
