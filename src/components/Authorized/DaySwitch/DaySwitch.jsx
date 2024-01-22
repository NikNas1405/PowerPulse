import { useState } from 'react';
import { format } from 'date-fns';
import { changeDate } from '../../../helpers/helpers';

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
import { toast } from 'react-toastify';

const DaySwitch = ({ currentDate, setCurrentDate, userDateRegistration }) => {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const openCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const goToPreviousDay = () => {
    setIsActive(true);
    const previousDay = new Date(currentDate);
    const formattedPreviousDay = changeDate(previousDay);
    if (formattedPreviousDay > userDateRegistration) {
      previousDay.setDate(previousDay.getDate() - 1);
      setCurrentDate(previousDay);
      setSelectedDate(previousDay);
      setIsActive(false);
    } else {
      toast.error(
        'Selected date cannot be earlier than the registration date.'
      );
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
        <Svg className={isActive ? 'passive' : ''}>
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
