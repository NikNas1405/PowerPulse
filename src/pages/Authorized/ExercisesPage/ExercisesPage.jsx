import { Container, Block } from './ExercisesPage.Styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getError,
  getIsLoading,
} from '../../../redux/exercises/categoriesSlice';
import { fetchAllExercisesCategories } from '../../../redux/exercises/operations';
import { StatusFilter } from '../../../components/Authorized/ExercisesCategoriesFilter/ExercisesCategoriesFilter';
import ExerciseCategories from '../../../components/Authorized/ExercisesCategories/ExercisesCategories';

const ExercisesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    const gettingExercisesFilters = async () => {
      try {
        dispatch(fetchAllExercisesCategories());
      } catch (error) {
        console.log(error.message);
      }
    };
    gettingExercisesFilters();
  }, [dispatch]);
  return (
    <Container>
      <Block>
        <p>Exercises</p>
        <StatusFilter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ExerciseCategories />
      </Block>
    </Container>
  );
};

export default ExercisesPage;
