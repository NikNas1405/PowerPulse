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
  const today = changeDate(new Date());

  const handleDateChange = (date) => {
    const formattedDate = changeDate(date);
    if (today >= formattedDate && formattedDate >= userDateRegistration) {
      setSelectedDate(date);
      setCurrentDate(date);
      onClose();
    } else {
      toast.error(
        `However, we don't have any data to show you. You can review the information from the day of your registration: ${userDateRegistration} up to today: ${today}. `
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
        maxDate={new Date(today)}
      />
      <CalendarGlobalStyles />
    </Wrapper>
  );
};

export default StyledDatepicker;
