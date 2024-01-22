import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import { Wrapper } from './StyledDatepicker.styled';
import { CalendarGlobalStyles } from '../../../styles/GlobalStyles';

const StyledDatepicker = ({
  selectedDate,
  setSelectedDate,
  isOpen,
  onClose,
  setCurrentDate,
}) => {
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setCurrentDate(date);
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

export default StyledDatepicker;
