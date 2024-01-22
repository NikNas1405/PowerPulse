import { useSelector } from 'react-redux';
import {
  getCategories,
  getIsLoading,
  getError,
} from '../../../redux/exercises/categoriesSlice';
import { SubCatItems } from './ExercisesSubcategoriesList.styled';
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
        <SubCatItems>
          {/* Відображення категорій для відповідного значення filter */}
          {categories.map((category) => (
            <Link
              key={category._id}
              to={`/exercises/${category.filter}/${category.name}`}
            >
              <div>
                <ExercisesSubcategoriesItem category={category} />
              </div>
            </Link>
          ))}
        </SubCatItems>
      )}
    </div>
  );
};
