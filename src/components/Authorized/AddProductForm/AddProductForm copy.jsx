import { useState } from 'react';

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
import { AddProductSuccess } from '../AddProductSuccess/AddProductSuccess';
import { BasicModalWindow } from '../../BasicModalWindow/BasicModalWindow.jsx';
import { toast } from 'react-toastify';

export const AddProductForm = ({
  closeModallAddProduct,
  productTitle,
  calories,
  productId,
}) => {
  // const product = {
  //   _id: '5d51694902b2373622ff5ab1',
  //   weight: 100,
  //   calories: 280,
  //   category: 'fish',
  //   title: 'anchovy paste',
  //   groupBloodNotAllowed: {
  //     1: false,
  //     2: false,
  //     3: false,
  //     4: false,
  //   },
  // };

  const [productToAdd, setProductToAdd] = useState({
    product: '',
    date: '',
    amount: '',
    calories: '',
  });

  const [caloriesСonsumed, setСaloriesСonsumed] = useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [modalSuccessIsOpen, setModalSuccessIsOpen] = useState(false);

  function openModal() {
    setModalSuccessIsOpen(true);
  }

  const handleCloseModal = () => {
    if (modalSuccessIsOpen) setModalSuccessIsOpen(false);
  };

  const currentDate = new Date();
  const formattedCurrentDate = `${currentDate.getDate()}.${
    currentDate.getMonth() + 1
  }.${currentDate.getFullYear()}`;

  const formattedTitle =
    productTitle[0].toUpperCase() + productTitle.slice(1).toLowerCase();

  const applyAddProduct = (e) => {
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
    } else {
      setError('');
      setIsError(false);
      setIsSuccess(true);

      try {
        //       dispatch(updateWeight(productToAdd));
        // setTimeout(() => {
        //   dispatch(refreshUser());
        // }, 150);
        console.log(productToAdd);
        closeModallAddProduct();
        setModalSuccessIsOpen(true);
        openModal();
      } catch (error) {
        toast.error('Network error:', error);
      }
    }
  };

  const handleInputChange = (e) => {
    const gramsEat = parseFloat(e.target.value);
    const caloriesPer100g = parseFloat(calories);

    if (!isNaN(gramsEat) && !isNaN(caloriesPer100g)) {
      const currentCalories = Math.round((gramsEat * caloriesPer100g) / 100);
      setСaloriesСonsumed(currentCalories);
      setProductToAdd({
        product: productId,
        date: formattedCurrentDate,
        amount: gramsEat,
        calories: currentCalories,
      });
      setError('');
      setIsError(false);
    } else {
      setСaloriesСonsumed(calories);
      setProductToAdd({
        product: '',
        date: '',
        amount: '',
        calories: '',
      });
    }
  };

  return (
    <>
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
              closeModallAddProduct();
            }}
          >
            Cancel
          </ButtonClose>
        </ButtonWripper>
      </AddProductFormStyled>

      {isSuccess && (
        <BasicModalWindow
          isOpen={modalSuccessIsOpen}
          onRequestClose={handleCloseModal}
        >
          <AddProductSuccess
            onClose={handleCloseModal}
            calories={caloriesСonsumed}
          />
        </BasicModalWindow>
      )}
    </>
  );
};
