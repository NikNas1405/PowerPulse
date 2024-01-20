import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DaySwitch from '../../../components/Authorized/DaySwitch/DaySwitch';
import DayExercises from '../../../components/Authorized/DayExercises/DayExercises';
import DayProducts from '../../../components/Authorized/DayProducts/DayProducts';
import DayDashboard from '../../../components/Authorized/DayDashboard/DayDashboard';
import { TitlePage } from '../../../components/Authorized/TitlePage/TitlePage';
import {
  DiaryCont,
  InfoConteiner,
  ProdAndExercise,
  TitleAndSwitch,
} from './DiaryPage.styled';
import { Container } from '../../../styles/GlobalStyles';
import { toast } from 'react-toastify';
import { selectDiaryInformation } from '../../../redux/diary/diarySelector';
import { getAllDiaryInformation } from '../../../redux/diary/diaryOperation';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectDiaryInformation);
  console.log(userData);
  const [currentDate] = useState(new Date());

  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const formattedCurrentDate = `${day}-${month}-${year}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getAllDiaryInformation(formattedCurrentDate));
      } catch (error) {
        toast.error('Error fetching data:', error);
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [dispatch, formattedCurrentDate]);

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
