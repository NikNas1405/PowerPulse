import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import { Wrapper } from './StyledDatepicker.styled';
import { CalendarGlobalStyles } from '../../../styles/GlobalStyles';
import { toast } from 'react-toastify';

const StyledDatepicker = ({
  selectedDate,
  setSelectedDate,
  isOpen,
  onClose,
  setCurrentDate,
  userDateRegistration,
}) => {
  
  const changeDate = (date) => {
    const dateObject = new Date(date);
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const year = dateObject.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleDateChange = (date) => {
    const formattedDate = changeDate(date);
    if (formattedDate >= userDateRegistration) {
      setSelectedDate(date);
      setCurrentDate(date);
      onClose();
    } else {
      toast.warning(
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
      />
      <CalendarGlobalStyles />
    </Wrapper>
  );
};

export default StyledDatepicker;
