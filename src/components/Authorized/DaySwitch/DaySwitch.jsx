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
  SvgPrev,
  SvgNext,
  ContainerWrap,
} from './DaySwitch.styled';

import StyledDatepicker from '../StyledDatepicker/StyledDatepicker';
import { toast } from 'react-toastify';

const DaySwitch = ({ currentDate, setCurrentDate, userDateRegistration }) => {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const [isActivePrev, setIsActivePrev] = useState(false);

  const [isActiveNext, setIsActiveNext] = useState(false);

  const openCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const goToPreviousDay = () => {
    setIsActivePrev(true);
    const previousDay = new Date(currentDate);
    const formattedPreviousDay = changeDate(previousDay);
    if (formattedPreviousDay > userDateRegistration) {
      previousDay.setDate(previousDay.getDate() - 1);
      setCurrentDate(previousDay);
      setSelectedDate(previousDay);
      setIsActivePrev(false);
    } else {
      toast.error(
        `However, we don't have any data to show you. Selected date cannot be earlier than the registration date: ${userDateRegistration}.`
      );
      setIsActivePrev(true);
    }
  };

  const goToNextDay = () => {
    setIsActiveNext(true);
    const today = changeDate(new Date());
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() + 1);
    if (nextDay > new Date()) {
      toast.error(
        `However, we don't have any data to show you. Selected date cannot be later than today's date: ${today}.`
      );
      setIsActiveNext(true);
    } else {
      setCurrentDate(nextDay);
      setSelectedDate(nextDay);
      setIsActiveNext(false);
    }
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
        <SvgPrev className={isActivePrev ? 'passivePrev' : ''}>
          <use href={sprite + '#icon-chevron-left'} />
        </SvgPrev>
      </BtnPrev>
      <BtnNext type="button" onClick={goToNextDay}>
        <SvgNext className={isActiveNext ? 'passiveNext' : ''}>
          <use href={sprite + '#icon-chevron-right'} />
        </SvgNext>
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
