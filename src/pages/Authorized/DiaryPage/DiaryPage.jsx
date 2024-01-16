import { useState } from 'react';
import DaySwitch from '../../../components/Authorized/DaySwitch/DaySwitch';
import { TitlePage } from '../../../components/Authorized/TitlePage/TitlePage';
import { DiaryWrapper, TitleAndSwitch } from './DiaryPage.styled';

const DiaryPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <DiaryWrapper>
      <TitleAndSwitch>
        <TitlePage title="Diary" />
        <DaySwitch currentDate={currentDate} setCurrentDate={setCurrentDate} />
      </TitleAndSwitch>
    </DiaryWrapper>
  );
};

export default DiaryPage;
