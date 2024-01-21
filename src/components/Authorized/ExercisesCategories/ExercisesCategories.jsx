import { ExCat, CategoryLink } from './ExercisesCategories.styled';

const ExerciseCategories = () => {
  const categories = ['Body parts', 'Muscles', 'Equipment'];

  return (
    <>
      <ExCat>
        {categories.map((category) => (
          <CategoryLink key={category}>
            <CategoryLink to={`/exercises/${category}`}>
              {category}
            </CategoryLink>
          </CategoryLink>
        ))}
      </ExCat>
    </>
  );
};

export default ExerciseCategories;
