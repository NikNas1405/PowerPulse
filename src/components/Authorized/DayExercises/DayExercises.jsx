import {
  NavText,
  NotProductText,
  Exercises,
  Svg,
  TitleNav,
  TitleText,
  Wrap,
} from './DayExercises.styled';
import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/sprite.svg';
import { globalColor } from '../../../styles/root';

const DayExercises = () => {
  return (
    <Exercises>
      <TitleNav>
        <TitleText>Exercises</TitleText>
        <Wrap>
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
        </Wrap>
      </TitleNav>

      <NotProductText>Not found exercises</NotProductText>
    </Exercises>
  );
};

export default DayExercises;
