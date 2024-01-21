import { useState } from 'react';
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

const DaySwitch = ({ currentDate }) => {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const openCalendar = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  const goToPreviousDay = () => {
    const previousDay = new Date(selectedDate);
    previousDay.setDate(selectedDate.getDate() - 1);
    if (previousDay >= currentDate) {
      setSelectedDate(previousDay);
    }
  };

  const goToNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() + 1);
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
      />
    </ContainerWrap>
  );
};

export default DaySwitch;

// import { useState, useRef } from 'react';
// import DatePicker from 'react-datepicker';
// import { format, addDays, isBefore } from 'date-fns';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
// import {
//   BtnNext,
//   BtnPrev,
//   CalenderBtn,
//   CalenderIconWrap,
//   DateLabel,
//   Svg,
//   SvgCalendar,
//   Wrap,
// } from './DaySwitch.styled';
// import sprite from '../../../assets/sprite.svg';
// import { CalendarGlobalStyles } from '../StyledDatepicker/StyledDatepicker.styled';

// const DaySwitch = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const calendarRef = useRef(null);

//   const CustomInput = ({ onClick }) => (
//     <Wrap>
//       <CalenderBtn onClick={onClick} style={{ cursor: 'pointer' }}>
//         <DateLabel>{format(selectedDate, 'dd/MM/yyyy')}</DateLabel>
//         <CalenderIconWrap>
//           <SvgCalendar>
//             <use href={`${sprite}#icon-normal`} />
//           </SvgCalendar>
//         </CalenderIconWrap>
//       </CalenderBtn>
//       <BtnPrev
//         type="button"
//         onClick={() => calendarRef.current.setOpen(true)}
//       >
//         <Svg>
//           <use href={`${sprite}#icon-chevron-left`} />
//         </Svg>
//       </BtnPrev>
//       <BtnNext
//         type="button"
//         onClick={handleNextDay}
//       >
//         <Svg>
//           <use href={`${sprite}#icon-chevron-right`} />
//         </Svg>
//       </BtnNext>
//     </Wrap>
//   );

//   const handleNextDay = () => {
//     const nextDay = addDays(selectedDate, 1);
//     if (!isBefore(nextDay, new Date())) {
//       setSelectedDate(nextDay);
//     }
//   };

//   return (
//     <>
//       <DatePicker
//         selected={selectedDate}
//         onChange={(date) => setSelectedDate(date)}
//         customInput={<CustomInput />}
//         dateFormat={'dd MM yyyy'}
//         calendarStartDay={1}
//         ref={calendarRef}
//       />
//       <CalendarGlobalStyles />
//     </>
//   );
// };

// export default DaySwitch;
