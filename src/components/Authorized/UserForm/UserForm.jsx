import React from 'react';
import { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { StyledForm } from './UserForm.styled';

// import { ProfileSchema } from '../../Yup.Schemas';

import * as Yup from 'yup';

export const ProfileSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
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
  birthday: Yup.date()
    .label('Birthday')
    .min(new Date('1906-01-01'), 'Must be older than 18 years')
    .required('Birthday is required'),
  blood: Yup.number()
    .label('Blood Type')
    .oneOf([1, 2, 3, 4], 'Invalid Blood Type')
    .required('Blood Type is required'),
  sex: Yup.string()
    .label('Sex')
    .oneOf(['male', 'female'], 'Invalid Sex')
    .required('Sex is required'),
  levelActivity: Yup.number()
    .label('Level of Activity')
    .oneOf([1, 2, 3, 4, 5], 'Invalid Level of Activity')
    .required('Level of Activity is required'),
});

export class UserForm extends Component {
  state = {
    numberOfClicks: 0,
  };

  handleClick = () => {};
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            name: '',
            email: '',
            height: '',
            currentWeight: '',
            desiredWeight: '',
            blood: '',
            gender: '',
            activity: '',
          }}
          onSubmit={(values) => {}}
        >
          <StyledForm>
            <label>
              Name
              <Field id="name" name="Name" placeholder="Jane" type="text" />
            </label>

            <label>
              Email
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
            </label>

            <label>
              Height
              <Field id="height" name="height" placeholder="0" type="number" />
            </label>

            <label>
              Current Weight
              <Field
                id="currentWeight"
                name="currentWeight"
                placeholder="0"
                type="number"
              />
            </label>

            <label>
              Desired Weight
              <Field
                id="desiredWeight"
                name="desiredWeight"
                placeholder="0"
                type="number"
              />
            </label>

            <div role="group" aria-labelledby="bloodLevel">
              <h2>Blood</h2>

              <label>
                <Field type="radio" name="blood" value="1" checked={''} />1
              </label>
              <label>
                <Field type="radio" name="blood" value="2" checked={''} />2
              </label>
              <label>
                <Field type="radio" name="blood" value="3" checked={''} />3
              </label>
              <label>
                <Field type="radio" name="blood" value="4" checked={''} />4
              </label>
            </div>

            <div role="group" aria-labelledby="genderType">
              <label>
                <Field type="radio" name="gender" value="male" checked={''} />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" checked={''} />
                Female
              </label>
            </div>

            <div role="group" aria-labelledby="activityGroup">
              <label>
                <Field
                  type="radio"
                  name="activity"
                  value="1"
                  required
                  checked
                />
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
                Extremely active (very strenous exercises/sports and physical
                work)
              </label>
            </div>

            <button type="submit">Save</button>
          </StyledForm>
        </Formik>
      </div>
    );
  }
}
