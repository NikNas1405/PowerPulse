import { ProductsFilters } from '../../../components/Authorized/ProductsFilters/ProductsFilters';
import { ProductsList } from '../../../components/Authorized/ProductsList/ProductsList';
import TitlePage from '../../../components/Authorized/TitlePage/TitlePage';

const ProductsPage = () => {
  return (
    <>
      <TitlePage title={'Products Page'} />
      <ProductsFilters />
      <ProductsList />
    </>
  );
};

export default ProductsPage;
