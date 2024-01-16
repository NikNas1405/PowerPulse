import { useState } from 'react';
import DaySwitch from '../../../components/Authorized/DaySwitch/DaySwitch';
import { TitlePage } from '../../../components/Authorized/TitlePage/TitlePage';
import {
  Container,
  DiaryWrapper,
  TitleAndSwitchContainer,
} from './DiaryPage.styled';

const DiaryPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <Container>
      <DiaryWrapper>
        <TitleAndSwitchContainer>
          <TitlePage title="Diary" />
          <DaySwitch
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />
        </TitleAndSwitchContainer>
      </DiaryWrapper>
    </Container>
  );
};

export default DiaryPage;
