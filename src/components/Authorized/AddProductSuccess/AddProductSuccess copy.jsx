import sprite from '../../../assets/sprite.svg';

import {
  Avocado,
  Title,
  Text,
  Button,
  StyledLink,
  AddProductSuccessStyled,
} from './AddProductSuccess.styled';

export const AddProductSuccess = (calories, onClose) => {
  return (
    <AddProductSuccessStyled>
      <Avocado />
      <Title>Well done</Title>
      <Text>
        <span>Calories: </span>
        {calories}
      </Text>
      <Button type="button" onClick={onClose}>
        Next product
      </Button>
      <StyledLink to={'/diary'}>
        To the diary
        <svg>
          <use href={sprite + '#icon-arrow'} />
        </svg>
      </StyledLink>
    </AddProductSuccessStyled>
  );
};
