// export const ExercisesItem = () => {
//   return <div></div>;
// };
// import {
//   ExerciseCard,
//   ExerciseCardDownBlock,
//   ExerciseCardMiddleBlock,
//   Button,
//   ExerciseCardTopBlock,
//   Value,
// } from './ExercisesItem.styled';

// import { globalColor } from '../../../styles/root';
// import sprite from '../../../assets/sprite.svg';
import {
  ProductsItemStyled,
  DietSpan,
  SvgWrapper,
  Text,
  TextCategory,
  Title,
  Button,
  WrapperTitle,
  WrapperText,
} from '../ProductsItem/ProductsItem.styled';

import { globalColor } from '../../../styles/root';

import sprite from '../../../assets/sprite.svg';
//
import Modal from 'react-modal';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useEffect, useState } from 'react';
import { addExercises } from '../../../redux/exercises/operations';
import { useDispatch } from 'react-redux';
import { orange } from '@mui/material/colors';

// import * as Yup from 'yup';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
  content: {
    maxWidth: 'calc(100vw - 20px)',
    maxHeight: 'calc(100vh - 6px)',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(3, 3, 3, 0.8)',
    color: 'white',
  },
};

Modal.setAppElement('#root');

const renderTime = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return `${minutes}:${seconds}`;
};

// export const burnedCalories = Yup.object().shape({
//   id: Yup.string().required('Name is required'),
//   date: yup
//     .string()
//     .matches(
//       /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/,
//       'Invalid date format. Please use dd/mm/YYYY.'
//     ),
//   time: Yup.number()
//     .label('Height')
//     .min(60, 'The exercise time should not be less than 1 minute')
//     .required('Height is required'),

//   calories: Yup.number()
//     .label('Desired Weight')
//     .min(35, 'Desired Weight must be a number greater than or equal to 35')
//     .required('Desired Weight is required'),
// });

export const ExercisesItem = ({
  exercise: {
    burnedCalories,
    name,
    bodyPart,
    target,
    gifUrl,
    time,
    _id,
    equipment,
  },
}) => {
  // const dispatch = useDispatch();
  const [select] = useState(180);
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [burnedCaloriesByTime, setBurnedCaloriesByTime] = useState(0);
  // const [exerTime, setExerTime] = useState(null);

  const funkOfBurnedCalories = (timesRemaining) => {
    const realTime = 180 - timesRemaining;
    // const realTime = setExerTime(180 - timesRemaining);
    const calories = burnedCalories;
    const minTime = time * 60;
    const realCalories = (realTime * calories) / minTime;
    return realCalories.toFixed(0);
  };

  // const handleSubmit = (timesRemaining) => {
  //   const date = Date.now();
  //   const dateToExerc =
  //     date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
  //   setIsPlaying(false);
  //   const realTime = setExerTime(180 - timesRemaining);
  //   // const exercise = {
  //   //   id: _id,
  //   //   date: dateToExerc,
  //   //   time: realTime,
  //   //   calories: funkOfBurnedCalories(timesRemaining),
  //   // };
  //   dispatch(addExercises({ ...exercise }));

  //   console.log(exercise);
  // };

  const SetlectReset = () => {
    return (
      <div style={{ display: 'flex' }}>
        <button
          className="pause"
          onClick={() => {
            setIsPlaying(false);
          }}
          style={{
            marginLeft: '20px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            fontSize: '18px',
            paddingLeft: '12px',
            paddingRight: '12px',
            paddingTop: '5px',
            paddingBottom: '5px',
            borderRadius: '6px',
          }}
        >
          Pause
        </button>
        <button
          className="play"
          onClick={() => {
            setIsPlaying(true);
          }}
          style={{
            marginLeft: '20px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            fontSize: '18px',
            paddingLeft: '12px',
            paddingRight: '12px',
            paddingTop: '5px',
            paddingBottom: '5px',
            borderRadius: '6px',
          }}
        >
          Play
        </button>
      </div>
    );
  };
  return (
    <>
      {/* <ExerciseCard>
        <ExerciseCardTopBlock>
          <p>WORKOUT</p>
          <Button onClick={() => setIsModalOpen(true)}>
            Start
            <div
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
            </div>
          </Button>
        </ExerciseCardTopBlock>

        <ExerciseCardMiddleBlock>
          <svg style={{ flexShrink: 0, width: '24px', height: '24px' }}>
            <use href={sprite + '#icon-running-stick-figure-svgrepo-com-1'} />
          </svg>

          <p>{name}</p>
        </ExerciseCardMiddleBlock>

        <ExerciseCardDownBlock>
          <p>
            Burned calories <Value>{burnedCalories}</Value>
          </p>
          <p>
            Body part <Value>{bodyPart}</Value>
          </p>
          <p>
            Target <Value>{target}</Value>
          </p>
        </ExerciseCardDownBlock>
      </ExerciseCard> */}
      <ProductsItemStyled>
        <DietSpan>WORKOUT</DietSpan>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            alignSelf: 'flex-end',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          ></div>
          <Button onClick={() => setIsModalOpen(true)}>
            Start
            <SvgWrapper
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
            </SvgWrapper>
          </Button>
        </div>

        <WrapperTitle>
          <svg style={{ flexShrink: 0, width: '24px', height: '24px' }}>
            <use href={sprite + '#icon-running-stick-figure-svgrepo-com-1'} />
          </svg>

          <Title>{name}</Title>
        </WrapperTitle>

        <WrapperText>
          <Text>
            <span>Burned calories:</span>
            {burnedCalories}
          </Text>
          <TextCategory>
            <span>Body part:</span>
            {bodyPart}
          </TextCategory>
          <Text>
            <span>Target:</span>
            {target}
          </Text>
        </WrapperText>
      </ProductsItemStyled>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Example Modal"
        style={modalStyles}
      >
        <div>
          <img src={gifUrl} alt="gif" />
          <p>Name {name}</p>
          <p>Burned calories {burnedCalories}</p>
          <p>Body part {bodyPart}</p>
          <p>Target {target}</p>
          <div className="timer-wrapper">
            <CountdownCircleTimer
              key={timer}
              isPlaying={isPlaying}
              duration={select}
              colors={[['#fc9002', 0.33], ['#F7B801', 0.33], ['#A30000']]}
              onComplete={() =>
                console.log('finished, burnedCalories', burnedCalories)
              }
              onUpdate={(remainingTime) => {
                setBurnedCaloriesByTime(funkOfBurnedCalories(remainingTime));
                // console.log('remainingTime', remainingTime);
              }}
            >
              {renderTime}
            </CountdownCircleTimer>
            <br />
            <br />
            <SetlectReset />
            <br />
            <br />
            <p>{burnedCaloriesByTime}</p>
          </div>
          <button type="submit">Add to diary</button>
        </div>
      </Modal>
    </>
  );
};
