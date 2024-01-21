import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { TitlePage } from '../../../components/Authorized/TitlePage/TitlePage';
import { ProductsFilters } from '../../../components/Authorized/ProductsFilters/ProductsFilters';
import { ProductsList } from '../../../components/Authorized/ProductsList/ProductsList';
import { Loader } from '../../../components/Loader/Loader';

import { Container } from '../../../styles/GlobalStyles';

import {
  Wrapper,
  TitleAndFilterWrapper,
  ProductsListWrapper,
} from './ProductsPage.styled';

import {
  selectProductsCategories,
  selectProductsIsLoading,
  selectProductsCategoriesIsLoading,
} from '../../../redux/products/productsSelector';
import { selectProducts } from '../../../redux/products/productsSelector';

import {
  fetchAllProductsCategories,
  fetchProducts,
} from '../../../redux/products/productsOperation';

const ProductsPage = () => {
  const dispatch = useDispatch();

  const isLoadingProducts = useSelector(selectProductsIsLoading);
  const isLoadingProductsCategories = useSelector(
    selectProductsCategoriesIsLoading
  );

  const categoriesArray = useSelector(selectProductsCategories);
  const productsArray = useSelector(selectProducts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = {
          title: '',
          category: null,
          filter: 'all',
        };
        await dispatch(fetchProducts(formData));
      } catch (error) {
        toast.error('Error fetching data:', error);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllProductsCategories());
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        <TitleAndFilterWrapper>
          <TitlePage title={'Products Page'} />
          <ProductsFilters
            categories={categoriesArray.map((item) => item.title)}
          />
        </TitleAndFilterWrapper>

        {isLoadingProducts ? (
          <Loader />
        ) : (
          <ProductsListWrapper>
            <ProductsList products={productsArray} />
          </ProductsListWrapper>
        )}
      </Container>
    </Wrapper>
  );
};

export default ProductsPage;
