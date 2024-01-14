import React from 'react';
import { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {
  ProfileContainer,
  ActiveRadioForm,
  ActiveRadio,
  ProfileField,
  StyledError,
} from './UserForm.styled';

// import { ProfileSchema } from '../../Yup.Schemas';

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
    .oneOf([1, 2, 3, 4], 'Invalid Blood Type')
    .required('Blood Type is required'),
  gender: Yup.string()
    .label('Gender')
    .oneOf(['male', 'female'], 'Invalid Gender')
    .required('Gender is required'),
  activity: Yup.number()
    .label('Level of Activity')
    .oneOf([1, 2, 3, 4, 5], 'Invalid Level of Activity')
    .required('Level of Activity is required'),
});

export class UserForm extends Component {
  // handleChange = (event) => {
  //   const { name, value } = event.target;

  //   this.setState((prevState) => ({
  //     userData: {
  //       ...prevState.userData,
  //       [name]: value,
  //     },
  //   }));
  // };

  // handleSubmit = (newUserData) => {
  //   this.setState({
  //     userData: newUserData,
  //   });
  //   console.log(newUserData);
  // };

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            name: '',
            email: '',
            height: 0,
            currentWeight: 0,
            desiredWeight: 0,
            blood: '1',
            gender: 'female',
            activity: '1',
          }}
          validationSchema={ProfileSchema}
          onSubmit={(values, actions) => {
            // this.handleSubmit(values);
            console.log(values);
            actions.resetForm();
          }}
        >
          <ProfileContainer>
            <label>
              Name
              <ProfileField name="name" placeholder="Jane" type="text" />
              <StyledError name="name" component="div" />
            </label>

            <label>
              Email
              <ProfileField
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
              <StyledError name="email" component="div" />
            </label>

            <label>
              Height
              <ProfileField name="height" placeholder="0" type="number" />
              <StyledError name="height" component="div" />
            </label>

            <label>
              Current Weight
              <ProfileField
                name="currentWeight"
                placeholder="0"
                type="number"
              />
              <StyledError name="currentWeight" component="div" />
            </label>

            <label>
              Desired Weight
              <ProfileField
                name="desiredWeight"
                placeholder="0"
                type="number"
              />
              <StyledError name="desiredWeight" component="div" />
            </label>

            <div role="group" aria-labelledby="bloodLevel">
              <StyledError name="blood" component="div" />

              <h2>Blood</h2>

              <label>
                <Field type="radio" name="blood" value="1" />1
              </label>
              <label>
                <Field type="radio" name="blood" value="2" />2
              </label>
              <label>
                <Field type="radio" name="blood" value="3" />3
              </label>
              <label>
                <Field type="radio" name="blood" value="4" />4
              </label>
            </div>

            <div role="group" aria-labelledby="genderType">
              <StyledError name="gender" component="div" />

              <h2>Gender</h2>
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
            </div>

            <div role="group" aria-labelledby="activityGroup">
              <StyledError name="activity" component="div" />

              <label>
                <h2>Activity</h2>
                <label>
                  <Field type="radio" name="activity" value="1" required />
                  Sedentary lifestyle (little or no physical activity)
                </label>
                <label>
                  <Field type="radio" name="activity" value="2" required />
                  Light activity (light excercises/sports 1-3 days per week)
                </label>
                <label>
                  <Field type="radio" name="activity" value="3" required />
                  Moderately active (moderate excercises/sports 2-5 days per
                  week){' '}
                </label>
                <label>
                  <Field type="radio" name="activity" value="4" required />
                  Very active (intence excercises/sports 6-7 days per week)
                </label>
                <label>
                  <Field type="radio" name="activity" value="5" required />
                  Extremely active (very strenous exercises/sports and physical
                  work)
                </label>
              </label>
            </div>

            <button type="submit">Save</button>
          </ProfileContainer>
        </Formik>
      </div>
    );
  }
}

<ProfileContainer>
  <label>
    Name
    <ProfileField name="name" placeholder="Jane" type="text" />
    <StyledError name="name" component="div" />
  </label>

  <label>
    Email
    <ProfileField name="email" placeholder="jane@acme.com" type="email" />
    <StyledError name="email" component="div" />
  </label>

  <label>
    Height
    <ProfileField name="height" placeholder="0" type="number" />
    <StyledError name="height" component="div" />
  </label>

  <label>
    Current Weight
    <ProfileField name="currentWeight" placeholder="0" type="number" />
    <StyledError name="currentWeight" component="div" />
  </label>

  <label>
    Desired Weight
    <ProfileField name="desiredWeight" placeholder="0" type="number" />
    <StyledError name="desiredWeight" component="div" />
  </label>

  <div role="group" aria-labelledby="bloodLevel">
    <StyledError name="blood" component="div" />

    <h2>Blood</h2>

    <label>
      <Field type="radio" name="blood" value="1" />1
    </label>
    <label>
      <Field type="radio" name="blood" value="2" />2
    </label>
    <label>
      <Field type="radio" name="blood" value="3" />3
    </label>
    <label>
      <Field type="radio" name="blood" value="4" />4
    </label>
  </div>

  <div role="group" aria-labelledby="genderType">
    <StyledError name="gender" component="div" />

    <h2>Gender</h2>
    <label>
      <Field type="radio" name="gender" value="male" />
      Male
    </label>
    <label>
      <Field type="radio" name="gender" value="female" />
      Female
    </label>
  </div>

  <div role="group" aria-labelledby="activityGroup">
    <StyledError name="activity" component="div" />

    <label>
      <h2>Activity</h2>
      <label>
        <Field type="radio" name="activity" value="1" required />
        Sedentary lifestyle (little or no physical activity)
      </label>
      <label>
        <Field type="radio" name="activity" value="2" required />
        Light activity (light excercises/sports 1-3 days per week)
      </label>
      <label>
        <Field type="radio" name="activity" value="3" required />
        Moderately active (moderate excercises/sports 2-5 days per week){' '}
      </label>
      <label>
        <Field type="radio" name="activity" value="4" required />
        Very active (intence excercises/sports 6-7 days per week)
      </label>
      <label>
        <Field type="radio" name="activity" value="5" required />
        Extremely active (very strenous exercises/sports and physical work)
      </label>
    </label>
  </div>

  <button type="submit">Save</button>
</ProfileContainer>;
