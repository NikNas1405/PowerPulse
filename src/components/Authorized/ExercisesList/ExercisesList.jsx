import { useDispatch, useSelector } from 'react-redux';

import {
  getExercises,
  getIsLoading,
  getError,
} from '../../../redux/exercises/exercisesSlice';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { fetchExercisesList } from '../../../redux/exercises/operations';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import { ProductsListWrapper } from '../../../pages/Authorized/ProductsPage/ProductsPage.styled';
import { ExercisesListWrapper } from './ExercisesList.styled';
import { Loader } from '../../Loader/Loader';
import { ProductsItemStyled } from '../ProductsItem/ProductsItem.styled';
// import GoBackBtn from '../../BackBtn/BackBtn';

export const ExercisesList = () => {
  const dispatch = useDispatch();
  const exercises = useSelector(getExercises);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const { filterList } = useParams();

  // console.log('filterList=>', filterList);
  // console.log('exercises=>', exercises);
  useEffect(() => {
    const gettingExercisesList = async () => {
      if (!filterList) {
        console.error('Invalid filterList');
        return;
      } else {
        dispatch(fetchExercisesList({ filterList: filterList }));
      }
    };
    gettingExercisesList();
  }, [dispatch, filterList]);

  return (
    <div>
      {/* <GoBackBtn /> */}
      <div>
        {isLoading && !error && <Loader />}

        {!exercises ? (
          <p>you do not have any exersise category</p>
        ) : (
          <ExercisesListWrapper>
            {/* Відображення категорій для відповідного значення filter */}
            {exercises.map((exercise) => (
              <ProductsItemStyled key={exercise._id}>
                <ExercisesItem exercise={exercise} />
              </ProductsItemStyled>
            ))}
          </ExercisesListWrapper>
        )}
      </div>
    </div>
  );
};
