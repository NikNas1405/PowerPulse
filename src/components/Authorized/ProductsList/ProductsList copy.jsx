import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import {
  //   selectProductsError,
  //   selectProductsIsFilter,
  selectProductsIsLoading,
} from '../../../redux/products/productsSelector';

import { ProductsItem } from '../ProductsItem/ProductsItem';

import { BasicModalWindow } from '../../BasicModalWindow/BasicModalWindow';
import { AddProductForm } from '../AddProductForm/AddProductForm';
import { Loader } from '../../Loader/Loader';

import {
  ProductsListStyled,
  Nothing,
  Paragraph1,
  Paragraph2,
} from './ProductsList.styled';

// import { selectUserProfile } from '../../../redux/settings/selectors';

export const ProductsList = ({ products }) => {
  // const error = useSelector(selectProductsError);
  const isLoading = useSelector(selectProductsIsLoading);
  // const isFilter = useSelector(selectProductsIsFilter);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (product) => {
    setIsOpen(true);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    if (modalIsOpen) setIsOpen(false);
    setSelectedProduct(null);
  };

  // // const currentUser = useSelector(selectUserProfile);
  // // const userBloodType = currentUser.blood;
  const userBloodType = 1;

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && products.length > 0 && (
        <ProductsListStyled>
          {products.map((product) => (
            <ProductsItem
              product={product}
              type={product.groupBloodNotAllowed[userBloodType]}
              category={product.category}
              title={product.title}
              calories={product.calories}
              weight={product.weight}
              key={product._id.$oid}
              handleOpenModal={openModal}
            />
          ))}
        </ProductsListStyled>
      )}
      {!isLoading && products.length <= 0 && (
        <Nothing>
          <Paragraph1>
            <span>Sorry, no results were found</span> for the product filters
            you selected. You may want to consider other search options to find
            the product you want. Our range is wide and you have the opportunity
            to find more options that suit your needs.
          </Paragraph1>
          <Paragraph2>Try changing the search parameters.</Paragraph2>
        </Nothing>
      )}
      {selectedProduct && (
        <BasicModalWindow
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
        >
          <AddProductForm
            closeModallAddProduct={handleCloseModal}
            calories={selectedProduct.calories}
            productTitle={selectedProduct.title}
            productId={selectedProduct._id.$oid}
          />
        </BasicModalWindow>
      )}
    </>
  );
};
