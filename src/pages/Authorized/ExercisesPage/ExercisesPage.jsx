// import { Container, Block } from './ExercisesPage.Styled';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
//
import {
  getError,
  getIsLoading,
} from '../../../redux/exercises/categoriesSlice';
import capitalizeFirstLetter from '../../../helpers/capitalizeFirstLetter';

import ExerciseCategories from '../../../components/Authorized/ExercisesCategories/ExercisesCategories';
import { fetchExercisesCategories } from '../../../redux/exercises/operations';
//
import { Container } from '../../../styles/GlobalStyles';
import { ContainerExPage } from './ExercisesPage.Styled';
//
import { TitlePage } from '../../../components/Authorized/TitlePage/TitlePage';
import { Loader } from '../../../components/Loader/Loader';
import { ExercisesList } from '../../../components/Authorized/ExercisesList/ExercisesList';
// import { GoBackBtn } from '../../../components/BackBtn/BackBtn';
// import { string } from 'yup';
const ExercisesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const { filter, filterList } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const gettingExercisesFilters = async () => {
      if (filter === undefined) {
        return console.log('something wrong');
      } else {
        dispatch(fetchExercisesCategories({ filter: filter }));
      }
      // try {
      //   dispatch(fetchExercisesByCategories({ filter: filter }));

      //   // dispatch(fetchAllExercisesCategories());
      // } catch (error) {
      //   console.log(error.message);
      // }
    };
    gettingExercisesFilters();
  }, [dispatch, filter]);

  return (
    // <ExerPageWrapper>
    <Container>
      {location.pathname.includes(filterList) && (
        <button onClick={() => navigate(-1)}>Back</button>
      )}

      <ContainerExPage>
        <TitlePage
          title={
            filterList
              ? capitalizeFirstLetter(filterList.split(' ')[0])
              : 'Exercises'
          }
        />
        <ExerciseCategories />
      </ContainerExPage>

      {isLoading && !error && <Loader />}
      <>
        <Suspense>
          <Outlet />
        </Suspense>
      </>
    </Container>
    // </ExerPageWrapper>
  );
};

export default ExercisesPage;
