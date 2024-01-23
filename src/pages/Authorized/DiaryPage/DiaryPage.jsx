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
import {
  selectIsRefreshing,
  selectIsUserParams,
  selectUser,
} from '../../../redux/auth/selectors';

import { changeDate } from '../../../helpers/helpers';
import { refreshUser } from '../../../redux/auth/operations';
import { useAuth } from '../../../hooks/useAuth';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectDiaryInformation);
  const isLoading = useSelector(selectDiaryIsLoading);
  const { addProducts, addExercises } = userData;
  const [currentDate, setCurrentDate] = useState(new Date());

  const user = useSelector(selectUser);
  const userDataRegistration = user.createdAt;

  const { bmr } = useAuth();

  const [userBMR, setUserBRM] = useState(0);

  const formattedCurrentDate = changeDate(currentDate);
  const formattedUserDateRegistration = changeDate(userDataRegistration);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(refreshUser());
        setUserBRM(bmr);

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
            <DayDashboard userDiaryInformation={userData} bmr={userBMR} />
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
