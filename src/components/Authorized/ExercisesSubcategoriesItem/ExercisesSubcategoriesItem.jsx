import {
  Block,
  SubCategoryName,
  CategoryTitle,
} from './ExercisesSubcategoriesItem.styled';

export const ExercisesSubcategoriesItem = ({
  category: { filter, name, imgURL },
}) => {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const newName = capitalizeFirstLetter(name);
  console.log(newName);
  return (
    <Block
      style={{ backgroundImage: `url(${imgURL})`, backgroundSize: 'cover' }}
    >
      <SubCategoryName>{newName}</SubCategoryName>
      <CategoryTitle>{filter}</CategoryTitle>
    </Block>
  );
};
