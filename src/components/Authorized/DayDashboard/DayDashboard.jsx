import PropTypes from 'prop-types';
import {
  BlockList,
  ContainerD,
  ExclamationSvg,
  ItemBlock,
  Svg,
  SvgWrap,
  Text,
  TextWrap,
  Title,
  TitleWrap,
  Value,
} from './DayDashboard.styled';
import { globalColor } from '../../../styles/root';
import sprite from '../../../assets/sprite.svg';
const DayDashboard = () => {
  return (
    <ContainerD>
      <BlockList>
        <ItemBlock style={{ backgroundColor: globalColor.colorOrange }}>
          <TitleWrap>
            <Svg>
              <use href={`${sprite}#icon-fluent_food-24-filled`}></use>
            </Svg>

            <Title>Daily calory intake</Title>
          </TitleWrap>

          <Value>{2200}</Value>
        </ItemBlock>

        <ItemBlock style={{ backgroundColor: globalColor.colorOrange }}>
          <TitleWrap>
            <Svg>
              <use href={`${sprite}#icon-dumbbell`}></use>
            </Svg>

            <Title>Daily norm of sports</Title>
          </TitleWrap>

          <Value>110 min</Value>
        </ItemBlock>

        <ItemBlock>
          <TitleWrap>
            <Svg>
              <use href={`${sprite}#icon-fluent_food-apple-20-filled`}></use>
            </Svg>

            <Title>Calories consumed</Title>
          </TitleWrap>

          <Value>{0}</Value>
        </ItemBlock>

        <ItemBlock>
          <TitleWrap>
            <Svg>
              <use href={`${sprite}#icon-calories-1`}></use>
            </Svg>

            <Title>Calories burned</Title>
          </TitleWrap>

          <Value>{0}</Value>
        </ItemBlock>

        <ItemBlock caloriesOverConsumed={0}>
          <TitleWrap>
            <Svg>
              <use href={`${sprite}#icon-bubble`}></use>
            </Svg>

            <Title>The rest of the calories</Title>
          </TitleWrap>

          <Value>{2200}</Value>
        </ItemBlock>

        <ItemBlock caloriesOverBurned={0}>
          <TitleWrap>
            <Svg>
              <use
                href={`${sprite}#icon-running-stick-figure-svgrepo-com-1`}
              ></use>
            </Svg>

            <Title>The rest of sports</Title>
          </TitleWrap>

          <Value>{110} min</Value>
        </ItemBlock>
      </BlockList>

      <TextWrap>
        <SvgWrap>
          <ExclamationSvg>
            <use href={`${sprite}#icon-tabler_exclamation-mark`}></use>
          </ExclamationSvg>
        </SvgWrap>

        <Text>
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </Text>
      </TextWrap>
    </ContainerD>
  );
};

DayDashboard.propTypes = {
  bmrData: PropTypes.number,
  diaryProducts: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      groupBloodNotAllowed: PropTypes.shape({
        1: PropTypes.bool.isRequired,
        2: PropTypes.bool.isRequired,
        3: PropTypes.bool.isRequired,
        4: PropTypes.bool.isRequired,
      }),
      product_ID: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
  diaryExercises: PropTypes.arrayOf(
    PropTypes.shape({
      bodyPart: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      equipment: PropTypes.string.isRequired,
      exercise_ID: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DayDashboard;
