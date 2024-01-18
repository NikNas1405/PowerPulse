import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, Wrapper } from './StyledDatepicker.styled';

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
        popperModifiers={{
          preventOverflow: {
            enabled: true,
            escapeWithReference: false,
            boundariesElement: 'viewport',
          },
        }}
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
export default StyledDatepicker;
