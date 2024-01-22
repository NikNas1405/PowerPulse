// import { Container, Block } from './ExercisesPage.Styled';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
//
import {
  getError,
  getIsLoading,
} from '../../../redux/exercises/categoriesSlice';

import ExerciseCategories from '../../../components/Authorized/ExercisesCategories/ExercisesCategories';
import { fetchExercisesCategories } from '../../../redux/exercises/operations';
//
import { Wrapper } from '../ProductsPage/ProductsPage.styled';
import { Container } from '../../../styles/GlobalStyles';
import { ContainerExPage } from './ExercisesPage.Styled';
//
import { TitlePage } from '../../../components/Authorized/TitlePage/TitlePage';
import { Loader } from '../../../components/Loader/Loader';

const ExercisesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const { filter } = useParams();
  // console.log('paramsFilter:', filter);

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
    <Wrapper>
      <Container>
        <ContainerExPage>
          <TitlePage title={'Exercises'} />
          <ExerciseCategories />
        </ContainerExPage>

        {isLoading && !error && <Loader />}
        <>
          <Suspense>
            <Outlet />
          </Suspense>
        </>
      </Container>
    </Wrapper>
  );
};

export default ExercisesPage;
