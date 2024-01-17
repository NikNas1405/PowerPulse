// import { useDispatch } from 'react-redux';
import { Block } from './ExercisesCategoryItem.Styled';

export const ExercisesCategoryItem = ({
  category: { filter, name, imgURL },
}) => {
  return (
    <div>
      <Block
        style={{ backgroundImage: `url(${imgURL})`, backgroundSize: 'cover' }}
      >
        <p>Filter: {filter}</p>
        <p>Name: {name}</p>
      </Block>
    </div>
  );
};
