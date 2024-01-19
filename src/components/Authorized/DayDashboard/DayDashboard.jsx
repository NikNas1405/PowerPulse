// import PropTypes from 'prop-types';
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
// import { useEffect, useState } from 'react';

const DayDashboard = () => {
  // const [userData, setUserData] = useState({
  //   dailyCaloryIntake: 0,
  //   dailyNormOfSports: 0,
  //   caloriesConsumed: 0,
  //   caloriesBurned: 0,
  //   restOfCalories: 0,
  //   restOfSports: 0,
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(

  //       );
  //       setUserData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching user data', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
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
              <use href={`${sprite}#icon-running-figure`}></use>
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

export default DayDashboard;
