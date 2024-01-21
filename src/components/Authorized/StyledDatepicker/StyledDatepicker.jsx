import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, Wrapper } from './StyledDatepicker.styled';
// import { forwardRef, useState } from 'react';
// import { format } from 'date-fns';

const StyledDatepicker = ({
  selectedDate,
  setSelectedDate,
  isOpen,
  onClose,
}) => {
  const handleDateChange = (date) => {
    setSelectedDate(date);
    onClose();
  };

  return (
    <Wrapper>
      <DatePicker
        selected={selectedDate}
        dateFormat="dd/MM/yyyy"
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
        open={isOpen}
        customInput={<div style={{ display: 'none' }} />}
        onChange={handleDateChange}
      />
      <CalendarGlobalStyles />
    </Wrapper>
  );
};

StyledDatepicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

// const StyledDatepicker = () => {
//   const [selectedDate, setSelectedDate] = useState(Date.now());

//   const CustomInput = forwardRef(({ value, onClick }, ref) => {
//     return (
//       <TitleWrapper onClick={onClick} ref={ref}>
//         {format(selectedDate, 'dd-MM-yyyy')}
//       </TitleWrapper>
//     );
//   });

//   return (
//     <>
//       <DatePicker
//         selected={selectedDate}
//         onChange={(date) => {
//           setSelectedDate(date);
//         }}
//         customInput={<CustomInput />}
//         dateFormat={'dd MM yyyy'}
//         calendarStartDay={1}
//         formatWeekDay={(day) => day.substr(0, 1)}
//       />
//       <CalendarGlobalStyles />
//     </>
//   );
// };
export default StyledDatepicker;
