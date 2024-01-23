import { Link, useParams } from 'react-router-dom';
import {
  ExercisesCategories,
  CategoryLink,
} from './ExercisesCategories.styled';

const ExerciseCategories = () => {
  const categories = ['Body parts', 'Muscles', 'Equipment'];
  const { filter } = useParams();

  const activeCategory = filter;

  return (
    <>
      <ExercisesCategories>
        {categories.map((category) => (
          <li key={category}>
            <CategoryLink
              to={`/exercises/${category}`}
              isactive={category === activeCategory ? 'true' : 'false'}
            >
              {category}
            </CategoryLink>
          </li>
        ))}
      </ExercisesCategories>
    </>
  );
};

export default ExerciseCategories;
