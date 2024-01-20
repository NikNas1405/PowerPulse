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

const DayExercises = () => {
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
