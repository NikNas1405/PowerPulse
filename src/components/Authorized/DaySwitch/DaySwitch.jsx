import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';

import sprite from '../../../assets/sprite.svg';

import {
  BtnNext,
  BtnPrev,
  CalenderBtn,
  CalenderIconSvg,
  DateLabel,
  Svg,
  ContainerWrap,
} from './DaySwitch.styled';

import StyledDatepicker from '../StyledDatepicker/StyledDatepicker';

const DaySwitch = ({ currentDate, setCurrentDate, userDateRegistration }) => {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const openCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const goToPreviousDay = () => {
    const previousDay = new Date(selectedDate);
    if (previousDay < userDateRegistration) {
      previousDay.setDate(selectedDate.getDate() - 1);
      setCurrentDate(previousDay);
      setSelectedDate(previousDay);
    }
  };



  const goToNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() + 1);
    setCurrentDate(nextDay);
    setSelectedDate(nextDay);
  };

  const closeCalendar = () => {
    setCalendarOpen(false);
  };

  return (
    <ContainerWrap>
      <CalenderBtn onClick={openCalendar}>
        <DateLabel>{format(selectedDate, 'dd/MM/yyyy')}</DateLabel>
        <CalenderIconSvg>
          <use href={sprite + '#icon-calendar'} />
        </CalenderIconSvg>
      </CalenderBtn>
      <BtnPrev type="button" onClick={goToPreviousDay}>
        <Svg>
          <use href={sprite + '#icon-chevron-left'} />
        </Svg>
      </BtnPrev>
      <BtnNext type="button" onClick={goToNextDay}>
        <Svg>
          <use href={sprite + '#icon-chevron-right'} />
        </Svg>
      </BtnNext>

      <StyledDatepicker
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        isOpen={isCalendarOpen}
        onClose={closeCalendar}
        setCurrentDate={setCurrentDate}
        userDateRegistration={userDateRegistration}
      />
    </ContainerWrap>
  );
};

export default DaySwitch;
