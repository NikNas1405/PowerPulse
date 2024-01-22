import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DaySwitch from '../../../components/Authorized/DaySwitch/DaySwitch';
import { TitlePage } from '../../../components/Authorized/TitlePage/TitlePage';
import DayProducts from '../../../components/Authorized/DayProducts/DayProducts';
import DayExercises from '../../../components/Authorized/DayExercises/DayExercises';
import DayDashboard from '../../../components/Authorized/DayDashboard/DayDashboard';
import { Loader } from '../../../components/Loader/Loader';

import {
  selectDiaryInformation,
  selectDiaryIsLoading,
} from '../../../redux/diary/diarySelector';
import { getAllDiaryInformation } from '../../../redux/diary/diaryOperation';

import {
  DiaryCont,
  InfoContainer,
  ProdAndExercise,
  TitleAndSwitch,
} from './DiaryPage.styled';

import { Container } from '../../../styles/GlobalStyles';

import { toast } from 'react-toastify';
import { selectUser } from '../../../redux/auth/selectors';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectDiaryInformation);
  const isLoading = useSelector(selectDiaryIsLoading);
  const { addProducts, addExercises } = userData;
  const [currentDate, setCurrentDate] = useState(new Date());

  const user = useSelector(selectUser);
  const userDataRegistration = user.createdAt;

  const changeDate = (date) => {
    const dateObject = new Date(date);
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const year = dateObject.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const formattedCurrentDate = changeDate(currentDate);
  const formattedUserDateRegistration = changeDate(userDataRegistration);

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
  }, [dispatch, formattedCurrentDate, currentDate]);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <DiaryCont>
          <TitleAndSwitch>
            <TitlePage title="Diary" />
            <DaySwitch
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              userDateRegistration={formattedUserDateRegistration}
            />
          </TitleAndSwitch>
          <InfoContainer>
            <DayDashboard userDiaryInformation={userData} />
            <ProdAndExercise>
              <DayProducts
                productsArray={addProducts}
                date={formattedCurrentDate}
              />
              <DayExercises
                exercisesArray={addExercises}
                date={formattedCurrentDate}
              />
            </ProdAndExercise>
          </InfoContainer>
        </DiaryCont>
      )}
    </Container>
  );
};

export default DiaryPage;
