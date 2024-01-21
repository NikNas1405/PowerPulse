import { useSelector } from 'react-redux';
import {
  getCategories,
  getIsLoading,
  getError,
} from '../../../redux/exercises/categoriesSlice';
import { Card } from './ExercisesSubcategoriesList.styled';
import { Link } from 'react-router-dom';
import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

export const ExercisesSubcategoriesList = () => {
  const categories = useSelector(getCategories);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <div>
      {isLoading && !error && <b>Request in progress...</b>}

      {!categories ? (
        <p>you do not have any exersise category</p>
      ) : (
        <div>
          {/* Відображення категорій для відповідного значення filter */}
          {categories.map((category) => (
            <Link
              key={category._id}
              to={`/exercises/${category.filter}/${category.name}`}
            >
              <Card>
                <ExercisesSubcategoriesItem category={category} />
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
