// import { useSelector } from 'react-redux';
import { ProductsFilters } from '../../../components/Authorized/ProductsFilters/ProductsFilters';
// import { ProductsList } from '../../../components/Authorized/ProductsList/ProductsList';
// import { TitlePage } from '../../../components/Authorized/TitlePage/TitlePage';

const ProductsPage = () => {
  // const products = useSelector(selectProducts);
  return (
    <>
      {/* <TitlePage title={'Products Page'} /> */}
      <ProductsFilters />
      {/* <ProductsList products={products} /> */}
    </>
  );
};

export default ProductsPage;
