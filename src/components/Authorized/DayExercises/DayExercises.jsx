import {
  NavText,
  NotProductText,
  Product,
  Svg,
  TitleNav,
  TitleProd,
  WrapA,
} from './DayExercises.styled';
import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/sprite.svg';
import { globalColor } from '../../../styles/root';

const DayExercises = () => {
  return (
    <Product>
      <TitleNav>
        <TitleProd>Exercises</TitleProd>
        <WrapA>
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
        </WrapA>
      </TitleNav>

      <NotProductText>Not found exercises</NotProductText>
    </Product>
  );
};

export default DayExercises;
