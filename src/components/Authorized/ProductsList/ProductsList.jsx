// ProductsList містить список всіх продуктів ProductsItem, отриманих з backendу з урахуванням усіх параметрів пошуку. У разі відсутності інформації на backendi, слід повідоміти про це користувача у вигляді тексту-"заглушки"

// import { useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';

// import {
//   selectIsLoading,
//   selectError,
//   selectIsFilter,
// } from '../../redux/selectors';

import { ProductsItem } from '../ProductsItem/ProductsItem';
import { BasicModalWindow } from '../BasicModalWindow/BasicModalWindow';

import { ProductsListStyled } from './ProductsList.styled';
import { SectionContainer } from '../GlobalStyle';

export const ProductsList = ({ products }) => {
  // const error = useSelector(selectError);
  // const isLoading = useSelector(selectIsLoading);
  // const isFilter = useSelector(selectIsFilter);

  const [selectedCar, setSelectedCar] = useState(null);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(car) {
    setIsOpen(true);
    setSelectedCar(car);
  }

  const handleCloseModal = () => {
    if (modalIsOpen) setIsOpen(false);
    setSelectedCar(null);
  };

  return (
    <SectionContainer>
      {products.length > 0 ? (
        <ProductsListStyled ProductsListStyled>
          {products.map((product) => (
            <ProductsItem
              product={product}
              type={product.type}
              name={product.name}
              calories={product.calories}
              category={product.category}
              weight={product.weight}
              key={product.id ? product.id : nanoid()}
              handleOpenModal={openModal}
            />
          ))}
        </ProductsListStyled>
      ) : (
        <div>
          <p>
            <span>Sorry, no results were found</span> for the product filters
            you selected. You may want to consider other search options to find
            the product you want. Our range is wide and you have the opportunity
            to find more options that suit your needs.
          </p>
          <p>Try changing the search parameters.</p>
        </div>
      )}

      {selectedCar && (
        <BasicModalWindow
          car={selectedCar}
          isOpen={modalIsOpen}
          closeModal={handleCloseModal}
        />
      )}
    </SectionContainer>
  );
};
