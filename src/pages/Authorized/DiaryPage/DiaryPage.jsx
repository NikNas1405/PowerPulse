import { useState } from 'react';
import DaySwitch from '../../../components/Authorized/DaySwitch/DaySwitch';
import { TitlePage } from '../../../components/Authorized/TitlePage/TitlePage';
import {
  DiaryCont,
  InfoConteiner,
  ProdAndExercise,
  TitleAndSwitch,
} from './DiaryPage.styled';
import DayProducts from '../../../components/Authorized/DayProducts/DayProducts';
import DayExercises from '../../../components/Authorized/DayExercises/DayExercises';
import DayDashboard from '../../../components/Authorized/DayDashboard/DayDashboard';
import { Container } from '../../../styles/GlobalStyles';

const DiaryPage = () => {
  const [currentDate] = useState(new Date());
  return (
    <Container>
      <DiaryCont>
        <TitleAndSwitch>
          <TitlePage title="Diary" />
          <DaySwitch currentDate={currentDate} />
        </TitleAndSwitch>
        <InfoConteiner>
          <DayDashboard />
          <ProdAndExercise>
            <DayProducts />
            <DayExercises />
          </ProdAndExercise>
        </InfoConteiner>
      </DiaryCont>
    </Container>
  );
};

export default DiaryPage;
