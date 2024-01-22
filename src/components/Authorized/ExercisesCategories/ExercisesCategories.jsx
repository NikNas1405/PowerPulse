import { Link } from 'react-router-dom';
import { ExCat, CategoryLink } from './ExercisesCategories.styled';

const ExerciseCategories = () => {
  const categories = ['Body parts', 'Muscles', 'Equipment'];

  return (
    <>
      <ExCat>
        {categories.map((category) => (
          <li key={category}>
            <CategoryLink
              // style={{ color: 'white' }}
              to={`/exercises/${category}`}
            >
              {category}
            </CategoryLink>
          </li>
        ))}
      </ExCat>
    </>
  );
};

export default ExerciseCategories;
