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
import { ExercisesListWrapper, Wrapper } from './ExercisesList.styled';
import { Loader } from '../../Loader/Loader';
import { ProductsItemStyled } from '../ProductsItem/ProductsItem.styled';

export const ExercisesList = () => {
  const dispatch = useDispatch();
  const exercises = useSelector(getExercises);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const { filterList } = useParams();

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
      <div>
        {isLoading && !error && <Loader />}

        {!exercises ? (
          <p>you do not have any exersise category</p>
        ) : (
          <Wrapper>
            <ExercisesListWrapper>
              {exercises.map((exercise) => (
                <ProductsItemStyled key={exercise._id}>
                  <ExercisesItem exercise={exercise} />
                </ProductsItemStyled>
              ))}
            </ExercisesListWrapper>
          </Wrapper>
        )}
      </div>
    </div>
  );
};
