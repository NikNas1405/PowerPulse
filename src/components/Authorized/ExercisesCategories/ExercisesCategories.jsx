// export const ExercisesCategories = () => {
//   return <div></div>;
// };

//
import { useSelector } from 'react-redux';

import { Card, CardBlock } from './ExercisesCategories.styled';
import {
  getCategories,
  getError,
  getIsLoading,
} from '../../../redux/exercises/categoriesSlice';
// import { getFilter } from '../../../redux/exercises/filterSlice';
import { ExercisesCategoryItem } from '../ExercisesCategoryItem/ExercisesCategoryItem';
import { getFilter } from '../../../redux/exercises/filterSlice';

const ExerciseCategories = () => {
  const categories = useSelector(getCategories);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);

  // console.log(filter);

  const filteredCategories = categories.filter(
    (category) => category.filter.toLowerCase() === filter.toLowerCase()
  );

  console.log(filteredCategories);

  return (
    <div>
      {isLoading && !error && <b>Request in progress...</b>}

      {!categories ? (
        <p>you do not have any exersise category</p>
      ) : (
        <CardBlock>
          {filteredCategories.map((category) => (
            <Card key={category._id}>
              <ExercisesCategoryItem category={category} />
            </Card>
          ))}
        </CardBlock>
      )}
    </div>
  );
};

export default ExerciseCategories;
