import * as Yup from 'yup';

export const ProfileSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
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
