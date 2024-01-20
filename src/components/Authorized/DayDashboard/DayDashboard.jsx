import {
  BlockList,
  Container,
  ExclamationSvg,
  ItemBlock,
  Svg,
  SvgText,
  Text,
  TextBlock,
  Title,
  TitleBlock,
  Value,
} from './DayDashboard.styled';
import { globalColor } from '../../../styles/root';
import sprite from '../../../assets/sprite.svg';

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectDailyCaloryIntake,
//   selectDailyNormOfSports,
//   selectCaloriesConsumed,
//   selectCaloriesBurned,
//   selectRestOfCalories,
//   selectRestOfSports,
//   selectWarningCalories,
//   selectEncouragementSports,
// } from '../../../redux/diary/diarySelector';
// import { fetchDiaryData } from '../../../redux/diary/diaryOperation';

const DayDashboard = () => {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchDiaryData());
  //   }, [dispatch]);

  //   const dailyCaloryIntake = useSelector(selectDailyCaloryIntake);
  //   const dailyNormOfSports = useSelector(selectDailyNormOfSports);
  //   const caloriesConsumed = useSelector(selectCaloriesConsumed);
  //   const caloriesBurned = useSelector(selectCaloriesBurned);
  //   const restOfCalories = useSelector(selectRestOfCalories);
  //   const restOfSports = useSelector(selectRestOfSports);
  //   const warningCalories = useSelector(selectWarningCalories);
  //   const encouragementSports = useSelector(selectEncouragementSports);

  return (
    <Container>
      <BlockList>
        <ItemBlock style={{ backgroundColor: globalColor.colorOrange }}>
          <TitleBlock>
            <Svg>
              <use href={`${sprite}#icon-fluent_food-24-filled`}></use>
            </Svg>
            <Title>Daily calory intake</Title>
          </TitleBlock>
          <Value>{}</Value>
        </ItemBlock>

        <ItemBlock style={{ backgroundColor: globalColor.colorOrange }}>
          <TitleBlock>
            <Svg>
              <use href={`${sprite}#icon-dumbbell`}></use>
            </Svg>
            <Title>Daily norm of sports</Title>
          </TitleBlock>
          <Value>{}min</Value>
        </ItemBlock>

        <ItemBlock>
          <TitleBlock>
            <Svg>
              <use href={`${sprite}#icon-fluent_food-apple-20-filled`}></use>
            </Svg>
            <Title>Calories consumed</Title>
          </TitleBlock>
          <Value>{}</Value>
        </ItemBlock>

        <ItemBlock>
          <TitleBlock>
            <Svg>
              <use href={`${sprite}#icon-calories-1`}></use>
            </Svg>
            <Title>Calories burned</Title>
          </TitleBlock>
          <Value>{}</Value>
        </ItemBlock>

        <ItemBlock caloriesOverConsumed={warningCalories}>
          <TitleBlock>
            <Svg>
              <use href={`${sprite}#icon-bubble`}></use>
            </Svg>
            <Title>The rest of the calories</Title>
          </TitleBlock>
          <Value>{}</Value>
        </ItemBlock>

        <ItemBlock caloriesOverBurned={encouragementSports}>
          <TitleBlock>
            <Svg>
              <use href={`${sprite}#icon-running-figure`}></use>
            </Svg>
            <Title>The rest of sports</Title>
          </TitleBlock>
          <Value>{} min</Value>
        </ItemBlock>
      </BlockList>

      <TextBlock>
        <SvgText>
          <ExclamationSvg>
            <use href={`${sprite}#icon-tabler_exclamation-mark`}></use>
          </ExclamationSvg>
        </SvgText>
        <Text>
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </Text>
      </TextBlock>
    </Container>
  );
};

export default DayDashboard;
