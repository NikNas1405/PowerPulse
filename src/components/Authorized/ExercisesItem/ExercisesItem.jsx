// export const ExercisesItem = () => {
//   return <div></div>;
// };
import {
  Forma,
  Label,
  ButtonSubmit,
  Input,
  Details,
  InfoBlock,
  DetailsSpan,
} from './ExercisesItem.styled';

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
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { addDiaryExercise } from '../../../redux/diary/diaryOperation';

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

// const dateRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

const caloriesSchema = Yup.object().shape({
  exerciseId: Yup.string().required(),
  date: Yup.string().required('Invalid date format. Please use dd/mm/YYYY.'),
  time: Yup.number()
    .min(1, 'Time of exercise should not be less than 1 minut')
    .required('Time is required'),

  calories: Yup.number().required(),
});

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
  const [select] = useState(180);
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [burnedCaloriesByTime, setBurnedCaloriesByTime] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [response, setResponse] = useState(null);

  const funkOfBurnedCalories = (timesRemaining) => {
    const realTime = 180 - timesRemaining;
    // const realTime = setExerTime(180 - timesRemaining);
    const calories = burnedCalories;
    const minTime = time * 60;
    const realCalories = (realTime * calories) / minTime;
    return realCalories.toFixed(0);
  };
  const date = new Date();
  const currentDate =
    date.getDate() + '-' + date.getMonth() + 1 + '-' + date.getFullYear();

  const updateObject = (remainingTimeObj) => {
    setBurnedCaloriesByTime(funkOfBurnedCalories(remainingTimeObj));
    setTimeSpent(Math.floor((180 - remainingTimeObj) / 60));
  };

  // const onSubmitButtonClick = (value, actions) => {
  const dispatch = useDispatch();

  const updateModalWithResponseState = (data) => {
    Array(document.getElementsByClassName('firstModal')).forEach(
      (element) => (element[0].hidden = true)
    );
    Array(document.getElementsByClassName('secondModal')).forEach(
      (element) => (element[0].hidden = false)
    );
  };
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
      //
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Example Modal"
        style={modalStyles}
      >
        <div className="firstModal">
          <div>
            <img src={gifUrl} alt="gif" />
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
                  updateObject(remainingTime);
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
            <InfoBlock>
              <Details>
                Name <DetailsSpan>{name}</DetailsSpan>
              </Details>
              <Details>
                Burned calories <DetailsSpan>{burnedCalories}</DetailsSpan>
              </Details>
              <Details>
                Body part <DetailsSpan>{bodyPart}</DetailsSpan>
              </Details>
              <Details>
                Target <DetailsSpan>{target}</DetailsSpan>
              </Details>
            </InfoBlock>

            {/* <button onClick={handleAddToDiary}>Add to diary</button> */}
          </div>
          <Formik
            initialValues={{
              exerciseId: _id,
              date: currentDate,
              time: timeSpent,
              calories: burnedCaloriesByTime,
            }}
            enableReinitialize
            validationSchema={caloriesSchema}
            onSubmit={(values) => {
              setIsPlaying(false);
              dispatch(addDiaryExercise({ ...values })).then((data) =>
                updateModalWithResponseState(data)
              );
            }}
          >
            <Forma>
              <Input hidden id="exerciseId" name="exerciseId" type="text" />
              <ErrorMessage name="exerciseId" component="exerciseId" />
              <Input hidden id="date" name="date" type="text" />
              <ErrorMessage name="date" component="date" />
              <Input
                hidden
                id="time"
                name="time"
                type="number"
                min="0"
                value={timeSpent}
              />
              <ErrorMessage name="time" component="div" />
              <Input
                hidden
                id="calories"
                name="calories"
                type="number"
                value={burnedCaloriesByTime}
              />
              <ErrorMessage name="calories" component="calories" />
              <button type="submit">Add to diary</button>
            </Forma>
          </Formik>
        </div>
        <div hidden className="secondModal">
          <div>
            {/* <svg style={{ flexShrink: 0, width: '24px', height: '24px' }}>
              <use href={sprite + '#icon-running-stick-figure-svgrepo-com-1'} />
            </svg> */}
            <h2>Well done</h2>
            <p>
              Your time <span>{timeSpent}</span>
            </p>
            <p>
              Burned calories <span>{burnedCaloriesByTime}</span>
            </p>
            <button onClick={() => setIsModalOpen(false)}>Next exercise</button>
            <a href="/PowerPulse/diary">
              <p>To the diary</p>
            </a>
            <p></p>
          </div>
        </div>
      </Modal>
    </>
  );
};
