import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { TitlePage } from '../../../components/Authorized/TitlePage/TitlePage';
import { ProductsFilters } from '../../../components/Authorized/ProductsFilters/ProductsFilters';
import { ProductsList } from '../../../components/Authorized/ProductsList/ProductsList';

import {
  Wrapper,
  TitleAndFilterWrapper,
  ProductsListWrapper,
} from './ProductsPage.styled';
import {
  fetchAllProductsCategories,
  fetchProducts,
} from '../../../redux/products/productsOperation';
import { selectProductsCategories } from '../../../redux/products/productsSelector';
import { selectProducts } from '../../../redux/products/productsSelector';

const ProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = {
          title: '',
          category: null,
          groupBloodNotAllowed: null,
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

  const categoriesArray = useSelector(selectProductsCategories);
  const productsArray = useSelector(selectProducts);

  return (
    <Wrapper>
      <TitleAndFilterWrapper>
        <TitlePage title={'Products Page'} />
        <ProductsFilters
          categories={categoriesArray.map((item) => item.title)}
        />
      </TitleAndFilterWrapper>

      <ProductsListWrapper>
        <ProductsList products={productsArray} />
      </ProductsListWrapper>
    </Wrapper>
  );
};

export default ProductsPage;
