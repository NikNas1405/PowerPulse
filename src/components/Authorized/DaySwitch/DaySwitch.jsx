// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import {
//   Wrap,
//   CalenderBtn,
//   DateLabel,
//   BtnPrev,
//   BtnNext,
//   Svg,
//   CalenderIconWrap,
// } from './DaySwitch.styled';
// import sprite from '../../../assets/sprite.svg';
// import StyledDatepicker from '../StyledDatepicker/StyledDatepicker';

// const DaySwitch = ({ currentDate, setCurrentDate, formattedDate }) => {
//   const [isDatepickerOpen, setIsDatepickerOpen] = useState(false);

//   const switchToPreviousDay = () => {
//     const previousDay = new Date(currentDate);
//     previousDay.setDate(previousDay.getDate() - 1);
//     setCurrentDate(previousDay);
//   };

//   const switchToNextDay = () => {
//     const nextDay = new Date(currentDate);
//     nextDay.setDate(nextDay.getDate() + 1);
//     setCurrentDate(nextDay);
//   };

//   const handleCalenderBtnClick = () => {
//     setIsDatepickerOpen((prev) => !prev);
//   };

//   return (
//     <Wrap>
//       <CalenderBtn onClick={handleCalenderBtnClick} id="calenderBtn">
//         <DateLabel>{formattedDate}</DateLabel>
//         <CalenderIconWrap>
//           <Svg>
//             <use href={`${sprite}#icon-tabler_exclamation-mark`} />
//           </Svg>
//         </CalenderIconWrap>
//       </CalenderBtn>

//       <BtnPrev
//         className="button"
//         tabIndex={isDatepickerOpen ? -1 : 0}
//         onClick={switchToPreviousDay}
//       >
//         <Svg>
//           <use href={`${sprite}#icon-chevron-left`} />
//         </Svg>
//       </BtnPrev>

//       <BtnNext
//         className="button"
//         tabIndex={isDatepickerOpen ? -1 : 0}
//         onClick={switchToNextDay}
//       >
//         <Svg>
//           <use href={`${sprite}#icon-chevron-right`} />
//         </Svg>
//       </BtnNext>

//       {isDatepickerOpen && (
//         <StyledDatepicker
//           selectedDate={currentDate}
//           setSelectedDate={setCurrentDate}
//           isOpen={isDatepickerOpen}
//           setIsOpen={setIsDatepickerOpen}
//         />
//       )}
//     </Wrap>
//   );
// };

// DaySwitch.propTypes = {
//   currentDate: PropTypes.instanceOf(Date),
//   setCurrentDate: PropTypes.func,
//   formattedDate: PropTypes.string,
// };

// export default DaySwitch;

// import { useState } from 'react';
// import { format } from 'date-fns';
// import sprite from '../../../assets/sprite.svg';
// import {
//   BtnNext,
//   BtnPrev,
//   CalenderBtn,
//   CalenderIconWrap,
//   DateLabel,
//   Svg,
//   Wrap,
// } from './DaySwitch.styled';
// import StyledDatepicker from '../StyledDatepicker/StyledDatepicker';

// const DaySwitch = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [isCalendarOpen, setCalendarOpen] = useState(false);

//   const openCalendar = () => {
//     setCalendarOpen(!isCalendarOpen);
//   };

//   const goToPreviousDay = () => {
//     const previousDay = new Date(selectedDate);
//     previousDay.setDate(selectedDate.getDate() - 1);
//     setSelectedDate(previousDay);
//   };

//   const goToNextDay = () => {
//     const nextDay = new Date(selectedDate);
//     nextDay.setDate(selectedDate.getDate() + 1);
//     setSelectedDate(nextDay);
//   };

//   return (
//     <Wrap>
//       <CalenderBtn onClick={{ openCalendar }} id="calenderBtn">
//         <DateLabel>{format(selectedDate, 'dd/MM/yyyy')}</DateLabel>
//         <CalenderIconWrap>
//           <Svg>
//             <use href={`${sprite}#icon-calendar`} />
//           </Svg>
//         </CalenderIconWrap>
//       </CalenderBtn>
//       <BtnPrev
//         type="button"
//         tabIndex={isCalendarOpen ? -1 : 0}
//         onClick={goToPreviousDay}
//       >
//         <Svg>
//           <use href={`${sprite}#icon-chevron-left`} />
//         </Svg>
//       </BtnPrev>
//       <BtnNext
//         type="button"
//         tabIndex={isCalendarOpen ? -1 : 0}
//         onClick={goToNextDay}
//       >
//         <Svg>
//           <use href={`${sprite}#icon-chevron-right`} />
//         </Svg>
//       </BtnNext>

//       <StyledDatepicker
//         selectedDate={selectedDate}
//         setSelectedDate={setSelectedDate}
//         isOpen={isCalendarOpen}
//       />
//     </Wrap>
//   );
// };

// export default DaySwitch;
import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { format, addDays, isBefore } from 'date-fns';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {
  BtnNext,
  BtnPrev,
  CalenderBtn,
  CalenderIconWrap,
  DateLabel,
  Svg,
  SvgCalendar,
  Wrap,
} from './DaySwitch.styled';
import sprite from '../../../assets/sprite.svg';
import { CalendarGlobalStyles } from '../StyledDatepicker/StyledDatepicker.styled';

const DaySwitch = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const calendarRef = useRef(null);

  const CustomInput = ({ onClick }) => (
    <Wrap>
      <CalenderBtn onClick={onClick} style={{ cursor: 'pointer' }}>
        <DateLabel>{format(selectedDate, 'dd/MM/yyyy')}</DateLabel>
        <CalenderIconWrap>
          <SvgCalendar>
            <use href={`${sprite}#icon-normal`} />
          </SvgCalendar>
        </CalenderIconWrap>
      </CalenderBtn>
      <BtnPrev
        type="button"
        // tabIndex={isCalendarOpen ? -1 : 0}
        onClick={() => calendarRef.current.setOpen(true)}
      >
        <Svg>
          <use href={`${sprite}#icon-chevron-left`} />
        </Svg>
      </BtnPrev>
      <BtnNext
        type="button"
        // tabIndex={isCalendarOpen ? -1 : 0}
        onClick={handleNextDay}
      >
        <Svg>
          <use href={`${sprite}#icon-chevron-right`} />
        </Svg>
      </BtnNext>
    </Wrap>
  );

  const handleNextDay = () => {
    const nextDay = addDays(selectedDate, 1);
    if (!isBefore(nextDay, new Date())) {
      setSelectedDate(nextDay);
    }
  };

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        ref={calendarRef}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default DaySwitch;
