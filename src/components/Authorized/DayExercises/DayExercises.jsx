import {
  NavText,
  NotExercisesText,
  Exercises,
  Svg,
  TitleNav,
  TitleText,
  NavBlock,
} from './DayExercises.styled';
import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/sprite.svg';
import { globalColor } from '../../../styles/root';

// const DayExercises = ({ exercisesArray }) => {
const DayExercises = () => {
  const exercisesArray = [
    {
      exerciseId: {
        _id: '64f2458d6f67bc34bae4f7f7',
        bodyPart: 'chest',
        equipment: 'leverage machine',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0009.gif',
        name: 'assisted chest dip (kneeling)',
        target: 'pectorals',
        burnedCalories: 329,
        time: 3,
      },
      date: '22-01-2024',
      time: 7,
      calories: 150,
      _id: '65ae304f0214b9f7570fd620',
    },
    {
      exerciseId: {
        _id: '64f2458d6f67bc34bae4f962',
        bodyPart: 'upper arms',
        equipment: 'dumbbell',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0416.gif',
        name: 'dumbbell standing biceps curl',
        target: 'biceps',
        burnedCalories: 264,
        time: 3,
      },
      date: '22-01-2024',
      time: 3,
      calories: 264,
      _id: '65ae309c0214b9f7570fd63a',
    },
    {
      exerciseId: {
        _id: '64f2458d6f67bc34bae4f8e7',
        bodyPart: 'upper legs',
        equipment: 'dumbbell',
        gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0291.gif',
        name: 'dumbbell bench squat',
        target: 'glutes',
        burnedCalories: 268,
        time: 3,
      },
      date: '22-01-2024',
      time: 3,
      calories: 268,
      _id: '65ae30c20214b9f7570fd641',
    },
  ];

  return (
    <Exercises>
      <TitleNav>
        <TitleText>Exercises</TitleText>
        <NavBlock>
          <NavLink
            to="/exercises"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <NavText>Add exercises</NavText>
            <Svg
              style={{
                width: '16px',
                height: '16px',
              }}
            >
              <use
                href={sprite + '#icon-arrow'}
                style={{
                  stroke: globalColor.colorOrange,
                }}
              />
            </Svg>
          </NavLink>
        </NavBlock>
      </TitleNav>
      <NotExercisesText>Not found exercises</NotExercisesText>
    </Exercises>
  );
};

export default DayExercises;
