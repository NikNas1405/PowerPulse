import {
  DivContainer,
  VideoWrapper,
  TextWrapper,
  VideoNumber,
  VideoText,
  WrapperSvg,
  WrapperTextSvg,
  TextNumber,
  WrapperDescription,
  TextDescription,
  Svg,
  SvgPlay,
} from './StatisticsInfo.styled';
import sprite from '../../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatistics } from '../../../redux/statistics/statisticsSelectors';
import { useEffect } from 'react';
import { getStatistics } from '../../../redux/statistics/statisticsOperations';

export const StatisticsInfo = ({ isWelcomePage }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatistics());
  }, []);

  const statistics = useSelector(selectStatistics);
  const { numberExercises, allTotalCaloriesExercises } = statistics;

  return (
    <DivContainer isWelcomePage={isWelcomePage}>
      <VideoWrapper>
        <WrapperSvg>
          <SvgPlay>
            <use href={`${sprite}#icon-play`}></use>
          </SvgPlay>
        </WrapperSvg>
        <div>
          <VideoNumber>{numberExercises}+</VideoNumber>
          <VideoText>Video tutorial</VideoText>
        </div>
      </VideoWrapper>
      <TextWrapper>
        <WrapperTextSvg>
          <Svg>
            <use
              href={`${sprite}#icon-running-stick-figure-svgrepo-com-1`}
            ></use>
          </Svg>
        </WrapperTextSvg>
        <WrapperDescription>
          <TextNumber>{allTotalCaloriesExercises}</TextNumber>
          <TextDescription>cal</TextDescription>
        </WrapperDescription>
      </TextWrapper>
    </DivContainer>
  );
};
