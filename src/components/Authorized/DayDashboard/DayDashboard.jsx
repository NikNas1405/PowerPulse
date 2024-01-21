import {
  ContainerWrap,
  ListStyled,
  ItemListStyled,
  TitleStyledWrapper,
  TitleStyled,
  ExclamationSvg,
  SvgStyled,
  SvgWrapperText,
  TextStyled,
  TextWrapper,
  DataValue,
} from './DayDashboard.styled';

import sprite from '../../../assets/sprite.svg';
import { useEffect, useState } from 'react';

const DayDashboard = ({ userDiaryInformation }) => {
  const {
    burnedCalories,
    caloriesIntake,
    consumedCalories,
    remainingCalories,
    remainingSports,
  } = userDiaryInformation;

  const overConsumedCalories = consumedCalories - caloriesIntake;

  const [isOverThan, setIsOverThan] = useState(false);

  useEffect(() => {
    if (overConsumedCalories > caloriesIntake) {
      setIsOverThan(true);
    }
  }, [overConsumedCalories]);

  return (
    <ContainerWrap>
      <ListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={`${sprite}#icon-fluent_food-24-filled`}></use>
            </SvgStyled>
            <TitleStyled>Daily calory intake</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>{caloriesIntake ? caloriesIntake : 0}</DataValue>
        </ItemListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={`${sprite}#icon-dumbbell`}></use>
            </SvgStyled>
            <TitleStyled>Daily norm of sports</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>110 min</DataValue>
        </ItemListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={`${sprite}#icon-fluent_food-apple-20-filled`}></use>
            </SvgStyled>
            <TitleStyled>Calories consumed</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>{consumedCalories ? consumedCalories : 0}</DataValue>
        </ItemListStyled>
        <ItemListStyled>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={`${sprite}#icon-calories-1`}></use>
            </SvgStyled>
            <TitleStyled>Calories burned</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>{burnedCalories ? burnedCalories : 0}</DataValue>
        </ItemListStyled>
        <ItemListStyled className={isOverThan ? 'redBg' : ''}>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={`${sprite}#icon-bubble`}></use>
            </SvgStyled>
            <TitleStyled>The rest of the calories</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>{remainingCalories ? remainingCalories : 0}</DataValue>
        </ItemListStyled>
        <ItemListStyled className={isOverThan ? 'greenBg' : ''}>
          <TitleStyledWrapper>
            <SvgStyled>
              <use href={`${sprite}#icon-running-figure`}></use>
            </SvgStyled>
            <TitleStyled>The rest of sports</TitleStyled>
          </TitleStyledWrapper>
          <DataValue>{remainingSports ? remainingSports : 110} min</DataValue>
        </ItemListStyled>
      </ListStyled>

      <TextWrapper>
        <SvgWrapperText>
          <ExclamationSvg>
            <use href={`${sprite}#icon-tabler_exclamation-mark`}></use>
          </ExclamationSvg>
        </SvgWrapperText>
        <TextStyled>
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </TextStyled>
      </TextWrapper>
    </ContainerWrap>
  );
};

export default DayDashboard;
