import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import { Wrapper } from './StyledDatepicker.styled';
import { CalendarGlobalStyles } from '../../../styles/GlobalStyles';
import { toast } from 'react-toastify';
import { changeDate } from '../../../helpers/helpers';

const StyledDatepicker = ({
  selectedDate,
  setSelectedDate,
  isOpen,
  onClose,
  setCurrentDate,
  userDateRegistration,
}) => {
  const handleDateChange = (date) => {
    const formattedDate = changeDate(date);
    if (formattedDate >= userDateRegistration) {
      setSelectedDate(date);
      setCurrentDate(date);
      onClose();
    } else {
      toast.error(
        'Selected date cannot be earlier than the registration date.'
      );
    }
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
        minDate={new Date(userDateRegistration)}
      />
      <CalendarGlobalStyles />
    </Wrapper>
  );
};

export default StyledDatepicker;
