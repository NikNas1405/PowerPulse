import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { TitlePage } from '../../../components/Authorized/TitlePage/TitlePage';
import { ProductsFilters } from '../../../components/Authorized/ProductsFilters/ProductsFilters';
// import { ProductsList } from '../../../components/Authorized/ProductsList/ProductsList';

import { fetchAllProducts } from '../../../redux/products/productsOperation';

import { Wrapper, TitleAndFilterWrapper } from './ProductsPage.styled';
import { selectProducts } from '../../../redux/products/productsSelector';

const ProductsPage = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchAllProducts());
      } catch (error) {
        toast.error('Error fetching data:', error);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Wrapper>
      <TitleAndFilterWrapper>
        <TitlePage title={'Products Page'} />
        <ProductsFilters />
      </TitleAndFilterWrapper>

      {/* <ProductsList products={products} /> */}
    </Wrapper>
  );
};

export default ProductsPage;
