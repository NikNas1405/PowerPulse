import { Block } from './ExercisesSubcategoriesItem.styled';

export const ExercisesSubcategoriesItem = ({
  category: { filter, name, imgURL },
}) => {
  return (
    <Block
      style={{ backgroundImage: `url(${imgURL})`, backgroundSize: 'cover' }}
    >
      <p>Filter: {filter}</p>
      <p>Name: {name}</p>
    </Block>
  );
};
