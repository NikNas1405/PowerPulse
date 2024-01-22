// export const ExercisesList = () => {
//   return <div></div>;
// };
import { ProductsListStyled } from '../ProductsList/ProductsList.styled';
import { useDispatch, useSelector } from 'react-redux';

import {
  getExercises,
  getIsLoading,
  getError,
} from '../../../redux/exercises/exercisesSlice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchExercisesList } from '../../../redux/exercises/operations';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';

// import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

export const ExercisesList = () => {
  // timer

  //
  const dispatch = useDispatch();
  const exercises = useSelector(getExercises);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const { filter, filterList } = useParams();

  console.log('filter=>', filter);
  console.log('filterList=>', filterList);
  console.log('exercises=>', exercises);

  useEffect(() => {
    const gettingExercisesList = async () => {
      if (!filter || !filterList) {
        console.error('Invalid filter or filterList');
        return;
      } else {
        dispatch(
          fetchExercisesList({ filter: filter, filterList: filterList })
        );
      }
    };
    gettingExercisesList();
  }, [dispatch, filter, filterList]);

  return (
    <div>
      <div>
        {isLoading && !error && <b>Request in progress...</b>}

        {!exercises ? (
          <p>you do not have any exersise category</p>
        ) : (
          <ProductsListStyled>
            {/* Відображення категорій для відповідного значення filter */}
            {exercises.map((exercise) => (
              <li key={exercise._id}>
                <ExercisesItem exercise={exercise} />
              </li>
            ))}
          </ProductsListStyled>
        )}
      </div>
    </div>
  );
};
