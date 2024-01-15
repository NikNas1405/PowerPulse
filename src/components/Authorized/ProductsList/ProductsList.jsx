// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

// import {
//   selectProductsError,
//   selectProductsIsFilter,
//   selectProductsIsLoading,
// } from '../../../redux/products/productsSelector';

import { ProductsItem } from '../ProductsItem/ProductsItem';
// import { BasicModalWindow } from '../../BasicModalWindow/BasicModalWindow';

import {
  ProductsListStyled,
  Nothing,
  Parag1,
  Parag2,
} from './ProductsList.styled';

export const ProductsList = ({products}) => {
  console.log(products);

  // const error = useSelector(selectProductsError);
  // const isLoading = useSelector(selectProductsIsLoading);
  // const isFilter = useSelector(selectProductsIsFilter);

  //   const [selectedProduct, setSelectedProduct] = useState(null);

  //   const [modalIsOpen, setIsOpen] = useState(false);

  //   function openModal(product) {
  //     setIsOpen(true);
  //     setSelectedProduct(product);
  //   }

  //   const handleCloseModal = () => {
  //     if (modalIsOpen) setIsOpen(false);
  //     setSelectedProduct(null);
  //   };

  return (
    <>
      {products.length > 0 ? (
        <ProductsListStyled>
          {products.map((product) => (
            <ProductsItem
              product={product}
              type={product.groupBloodNotAllowed}
              category={product.category}
              title={product.title}
              calories={product.calories}
              weight={product.weight}
              key={product._id.$oid}
              //   handleOpenModal={openModal}
            />
          ))}
        </ProductsListStyled>
      ) : (
        <Nothing>
          <Parag1>
            <span>Sorry, no results were found</span> for the product filters
            you selected. You may want to consider other search options to find
            the product you want. Our range is wide and you have the opportunity
            to find more options that suit your needs.
          </Parag1>
          <Parag2>Try changing the search parameters.</Parag2>
        </Nothing>
      )}

      {/* {selectedProduct && (
        <BasicModalWindow
          product={selectedProduct}
          isOpen={modalIsOpen}
          closeModal={handleCloseModal}
        />
      )} */}
    </>
  );
};
