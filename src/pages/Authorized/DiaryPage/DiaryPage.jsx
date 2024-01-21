import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DaySwitch from '../../../components/Authorized/DaySwitch/DaySwitch';
import { TitlePage } from '../../../components/Authorized/TitlePage/TitlePage';
import DayProducts from '../../../components/Authorized/DayProducts/DayProducts';
import DayExercises from '../../../components/Authorized/DayExercises/DayExercises';
import DayDashboard from '../../../components/Authorized/DayDashboard/DayDashboard';

import { selectDiaryInformation } from '../../../redux/diary/diarySelector';
import { getAllDiaryInformation } from '../../../redux/diary/diaryOperation';

import {
  DiaryCont,
  InfoContainer,
  ProdAndExercise,
  TitleAndSwitch,
} from './DiaryPage.styled';

import { Container } from '../../../styles/GlobalStyles';

import { toast } from 'react-toastify';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectDiaryInformation);

  // ОСЬ ЩО НАМ ПРИХОДИТЬ
  // addExercises  Array(0)
  // addProducts // Array(3)
  //  [  amount: 150,
  //     calories : 72,
  //     date : "20-01-2024",
  //     productId : {calories: 48, category: "soft drinks", groupBloodNotAllowed: { 1: false, 2: false, 3: false, 4: false },
  //     title : "banana juice",
  //     weight : 100,
  //     _id : "5d51694902b2373622ff5f42"]

  const { addProducts, addExercises } = userData;

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
        <InfoContainer>
          <DayDashboard userDiaryInformation={userData} />
          <ProdAndExercise>
            <DayProducts productsArray={addProducts} />
            <DayExercises exercisesArray={addExercises} />
          </ProdAndExercise>
        </InfoContainer>
      </DiaryCont>
    </Container>
  );
};

export default DiaryPage;
