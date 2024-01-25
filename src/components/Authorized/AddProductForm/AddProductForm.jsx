import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { changeDate } from '../../../helpers/helpers';

import { addDiaryProducts } from '../../../redux/diary/diaryOperation';

import { selectDiaryError } from '../../../redux/diary/diarySelector';

import {
  AddProductFormStyled,
  Title,
  Text,
  ButtonWripper,
  Button,
  ButtonClose,
  Label,
  Input,
  TitleInputWripper,
  InputWrapper,
  ErrorMessage,
} from './AddProductForm.styled';

import sprite from '../../../assets/sprite.svg';

export const AddProductForm = ({
  closeModallAddProductForm,
  onClick,
  productTitle,
  calories,
  productId,
}) => {
  const dispatch = useDispatch();

  const errorAdding = useSelector(selectDiaryError);

  const [productToAdd, setProductToAdd] = useState({
    product: '',
    date: '',
    amount: '',
    calories: '',
  });

  const [caloriesСonsumed, setСaloriesСonsumed] = useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  const currentDate = new Date();

  const formattedCurrentDate = changeDate(currentDate);

  const formattedTitle =
    productTitle[0].toUpperCase() + productTitle.slice(1).toLowerCase();

  const applyAddProduct = async (e) => {
    e.preventDefault();
    if (
      (0 >= productToAdd.amount || 3000 <= productToAdd.amount) &&
      productToAdd.amount
    ) {
      setError('Entering value must be at range 1g to 3000g');
      setIsError(true);
      setСaloriesСonsumed(calories);
    } else if (
      Object.keys(productToAdd).length < 0 ||
      productToAdd.amount === ''
    ) {
      setError('Enter amount*');
      setIsError(true);
    } else if (!errorAdding) {
      setError('');
      setIsError(false);
      try {
        closeModallAddProductForm();
        onClick(productToAdd.calories);
        await dispatch(addDiaryProducts(productToAdd));
      } catch (error) {
        toast.error('Sorry, something went wrong, please try again', {
          theme: 'dark',
        });
      }
    } else {
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
      return;
    }
  };

  const handleInputChange = (e) => {
    const gramsEat = parseFloat(e.target.value);
    const caloriesPer100g = parseFloat(calories);

    if (!isNaN(gramsEat) && !isNaN(caloriesPer100g)) {
      const currentCalories = Math.round((gramsEat * caloriesPer100g) / 100);
      setСaloriesСonsumed(currentCalories);
      setProductToAdd({
        productId: productId,
        date: formattedCurrentDate,
        amount: gramsEat,
        calories: currentCalories,
      });
      setError('');
      setIsError(false);
    } else {
      setСaloriesСonsumed(calories);
      setProductToAdd({
        productId: '',
        date: '',
        amount: '',
        calories: '',
      });
    }
  };

  return (
    <AddProductFormStyled onSubmit={applyAddProduct} noValidate>
      <TitleInputWripper>
        <Title>{formattedTitle}</Title>
        <InputWrapper>
          <Label htmlFor="calories">grams</Label>
          <Input
            type="number"
            name="calories"
            placeholder="100"
            autoComplete="off"
            required
            step="1"
            min="1"
            max="3000"
            onChange={handleInputChange}
          />
          {isError && (
            <ErrorMessage>
              <svg>
                <use href={sprite + '#icon-checkbox-circle-fill'} />
              </svg>
              {error}
            </ErrorMessage>
          )}
        </InputWrapper>
      </TitleInputWripper>
      {caloriesСonsumed ? (
        <Text>
          <span>Calories: </span>
          {caloriesСonsumed}
        </Text>
      ) : (
        <Text>
          <span>Calories: </span>
          {calories}
        </Text>
      )}
      <ButtonWripper>
        <Button type="submit">Add to diary</Button>
        <ButtonClose
          type="button"
          onClick={() => {
            closeModallAddProductForm();
          }}
        >
          Cancel
        </ButtonClose>
      </ButtonWripper>
    </AddProductFormStyled>
  );
};
