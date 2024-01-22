import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import sprite from '../../../assets/sprite.svg';

import { globalColor } from '../../../styles/root';

import {
  TableWrapper,
  TitleNav,
  TitleText,
  NavBlock,
  NavText,
  Nothing,
  Table,
  WrapperForItemsArray,
  MobileItemsHolder1,
  MobileItemsHolder2,
  MobileItemsHolder3,
  MobileItemsHolder4,
  TableDeleteButton,
  SvgTableStyled,
} from '../DayProducts/DayProducts.styled';

import {
  HeaderArray,
  ExerciseListArray,
  ExerciseListArrayItemMobile,
  HeaderItem,
  ExerciseListArrayItem,
} from './DayExercises.styled';
import { selectDiaryError } from '../../../redux/diary/diarySelector';
import { useSelector } from 'react-redux';

const DayExercises = ({ exercisesArray }) => {
// const DayExercises = () => {
//   const exercisesArray = [
//     {
//       exerciseId: {
//         _id: '64f2458d6f67bc34bae4f7h8',
//         bodyPart: 'chest',
//         equipment: 'leverage machine',
//         gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0009.gif',
//         name: 'assisted chest dip (kneeling)',
//         target: 'pectorals',
//         burnedCalories: 329,
//         time: 3,
//       },
//       date: '22-01-2024',
//       time: 7,
//       calories: 150,
//       _id: '65ae304f0214b9f7570fd669',
//     },
//     {
//       exerciseId: {
//         _id: '64f2458d6f67bc34bae4f7f7',
//         bodyPart: 'chest',
//         equipment: 'leverage machine',
//         gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0009.gif',
//         name: 'assisted chest dip (kneeling)',
//         target: 'pectorals',
//         burnedCalories: 329,
//         time: 3,
//       },
//       date: '22-01-2024',
//       time: 7,
//       calories: 150,
//       _id: '65ae304f0214b9f7570fd620',
//     },
//     {
//       exerciseId: {
//         _id: '64f2458d6f67bc34bae4f962',
//         bodyPart: 'upper arms',
//         equipment: 'dumbbell',
//         gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0416.gif',
//         name: 'dumbbell standing biceps curl',
//         target: 'biceps',
//         burnedCalories: 264,
//         time: 3,
//       },
//       date: '22-01-2024',
//       time: 3,
//       calories: 264,
//       _id: '65ae309c0214b9f7570fd63a',
//     },
//     {
//       exerciseId: {
//         _id: '64f2458d6f67bc34bae4f8e7',
//         bodyPart: 'upper legs',
//         equipment: 'dumbbell',
//         gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0291.gif',
//         name: 'dumbbell bench squat',
//         target: 'glutes',
//         burnedCalories: 268,
//         time: 3,
//       },
//       date: '22-01-2024',
//       time: 3,
//       calories: 268,
//       _id: '65ae30c20214b9f7570fd641',
//     },
//   ];

  const isMobile = useMediaQuery('(max-width:768px)');
  const error = useSelector(selectDiaryError);

  const formattedTitle = (exerciseTitle) => {
    return (
      exerciseTitle[0].toUpperCase() + exerciseTitle.slice(1).toLowerCase()
    );
  };

  return (
    <TableWrapper>
      <TitleNav>
        <TitleText>Exercises</TitleText>
        <NavBlock>
          <NavLink
            to="/exercises"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <NavText>Add exercises</NavText>
            <svg
              style={{
                width: '16px',
                height: '16px',
                marginLeft: '8px',
                stroke: globalColor.colorOrange,
              }}
            >
              <use href={sprite + '#icon-arrow'} />
            </svg>
          </NavLink>
        </NavBlock>
      </TitleNav>

      {exercisesArray && exercisesArray.length > 0 && !error ? (
        isMobile ? (
          <Table>
            <WrapperForItemsArray>
              {exercisesArray.map((exercise) => (
                <ExerciseListArray key={exercise._id}>
                  <ExerciseListArrayItemMobile>
                    Body Part
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    {formattedTitle(exercise.exerciseId.bodyPart)}
                  </ExerciseListArrayItemMobile>

                  <ExerciseListArrayItemMobile>
                    Equipment
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    {formattedTitle(exercise.exerciseId.equipment)}
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    Name
                  </ExerciseListArrayItemMobile>
                  <ExerciseListArrayItemMobile>
                    {formattedTitle(exercise.exerciseId.name)}
                  </ExerciseListArrayItemMobile>
                  <div
                    style={{
                      display: 'flex',
                      gap: '14px',
                    }}
                  >
                    <MobileItemsHolder1
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <ExerciseListArrayItemMobile>
                        Target
                      </ExerciseListArrayItemMobile>
                      <ExerciseListArrayItemMobile>
                        {formattedTitle(exercise.exerciseId.target)}
                      </ExerciseListArrayItemMobile>
                    </MobileItemsHolder1>
                    <MobileItemsHolder2
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <ExerciseListArrayItemMobile>
                        Burned Calories
                      </ExerciseListArrayItemMobile>
                      <ExerciseListArrayItemMobile>
                        {exercise.exerciseId.burnedCalories}
                      </ExerciseListArrayItemMobile>
                    </MobileItemsHolder2>
                    <MobileItemsHolder3
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <ExerciseListArrayItemMobile>
                        Time
                      </ExerciseListArrayItemMobile>
                      <ExerciseListArrayItemMobile>
                        {exercise.time}
                      </ExerciseListArrayItemMobile>
                    </MobileItemsHolder3>
                    <MobileItemsHolder4
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <ExerciseListArrayItemMobile>
                        {''}
                      </ExerciseListArrayItemMobile>
                      <ExerciseListArrayItemMobile>
                        <TableDeleteButton
                          type="button"
                          onClick={() => handleDelete(exercise._id)}
                        >
                          <SvgTableStyled>
                            <use href={sprite + '#icon-trash-03'}></use>
                          </SvgTableStyled>
                        </TableDeleteButton>
                      </ExerciseListArrayItemMobile>
                    </MobileItemsHolder4>
                  </div>
                </ExerciseListArray>
              ))}
            </WrapperForItemsArray>
          </Table>
        ) : (
          <Table>
            <HeaderArray>
              <HeaderItem>Body Part</HeaderItem>
              <HeaderItem>Equipment</HeaderItem>
              <HeaderItem>Name</HeaderItem>
              <HeaderItem>Target</HeaderItem>
              <HeaderItem>Burned Calories</HeaderItem>
              <HeaderItem>Time</HeaderItem>
              <HeaderItem>{''}</HeaderItem>
            </HeaderArray>

            <WrapperForItemsArray>
              {exercisesArray.map((exercise) => (
                <ExerciseListArray key={exercise._id}>
                  <ExerciseListArrayItem>
                    {formattedTitle(exercise.exerciseId.bodyPart)}
                  </ExerciseListArrayItem>
                  <ExerciseListArrayItem>
                    {formattedTitle(exercise.exerciseId.equipment)}
                  </ExerciseListArrayItem>
                  <ExerciseListArrayItem>
                    {formattedTitle(exercise.exerciseId.name)}
                  </ExerciseListArrayItem>
                  <ExerciseListArrayItem>
                    {formattedTitle(exercise.exerciseId.target)}
                  </ExerciseListArrayItem>
                  <ExerciseListArrayItem>
                    {exercise.exerciseId.burnedCalories}
                  </ExerciseListArrayItem>
                  <ExerciseListArrayItem>{exercise.time}</ExerciseListArrayItem>
                  <ExerciseListArrayItem>
                    <TableDeleteButton
                      type="button"
                      onClick={() => handleDelete(exercise._id)}
                    >
                      <SvgTableStyled>
                        <use href={sprite + '#icon-trash-03'}></use>
                      </SvgTableStyled>
                    </TableDeleteButton>
                  </ExerciseListArrayItem>
                </ExerciseListArray>
              ))}
            </WrapperForItemsArray>
          </Table>
        )
      ) : (
        <Nothing>Not found exercises</Nothing>
      )}
    </TableWrapper>
  );
};

export default DayExercises;
