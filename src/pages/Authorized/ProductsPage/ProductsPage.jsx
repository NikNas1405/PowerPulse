import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';і

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
  // fetchProducts,
} from '../../../redux/products/productsOperation';
import { selectProductsCategories } from '../../../redux/products/productsSelector';
// import { selectProducts } from '../../../redux/products/productsSelector';

const ProductsPage = () => {
  const dispatch = useDispatch();

  const products = [
    {
      _id: {
        $oid: '5d51694902b2373622ff5773',
      },
      weight: 100,
      calories: 340,
      category: 'dairy',
      title: 'Danbo cheese',
      groupBloodNotAllowed: false,
    },
    {
      _id: {
        $oid: '5d51694902b2373622ff5b7f',
      },
      weight: 100,
      calories: 112,
      category: 'fish',
      title: 'marlin',
      groupBloodNotAllowed: false,
    },
    {
      _id: {
        $oid: '5d51694902b2373622ff5e13',
      },
      weight: 100,
      calories: 17,
      category: 'vegetables and herbs',
      title: 'Salads Belaya Dacha Delicate root',
      groupBloodNotAllowed: false,
    },
    {
      _id: {
        $oid: '5d51694902b2373622ff5b6f',
      },
      weight: 100,
      calories: 160,
      category: 'fish',
      title: 'Cold smoked bream',
      groupBloodNotAllowed: false,
    },
    {
      _id: {
        $oid: '5d51694902b2373622ff5b8d',
      },
      weight: 100,
      calories: 281,
      category: 'fish',
      title: 'Pollock in batter',
      groupBloodNotAllowed: false,
    },
    {
      _id: {
        $oid: '5d51694902b2373622ff590d',
      },
      weight: 100,
      calories: 232,
      category: 'meat',
      title: 'Lamb ham',
      groupBloodNotAllowed: true,
    },
    {
      _id: {
        $oid: '5d51694902b2373622ff5f16',
      },
      weight: 100,
      calories: 38,
      category: 'soft drinks',
      title: 'Pepsi',
      groupBloodNotAllowed: false,
    },
    {
      _id: {
        $oid: '5d51694802b2373622ff56c1',
      },
      weight: 100,
      calories: 432,
      category: 'flour',
      title: 'Cedar flour',
      groupBloodNotAllowed: false,
    },
    {
      _id: {
        $oid: '5d51694902b2373622ff5b65',
      },
      weight: 100,
      calories: 112,
      category: 'fish',
      title: 'langoustine',
      groupBloodNotAllowed: true,
    },
    {
      _id: {
        $oid: '5d51694902b2373622ff5726',
      },
      weight: 100,
      calories: 282,
      category: 'dairy',
      title: 'Cheese Artis for pan frying and grilling 45%',
      groupBloodNotAllowed: false,
    },
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
        // const formData = {
        //   title: '',
        //   category: null,
        //   groupBloodNotAllowed: null,
        // };
        // await dispatch(fetchProducts(formData));
    //   } catch (error) {
    //     toast.error('Error fetching data:', error);
    //     console.error('Error fetching data:', error);
    //   }
    // };

  //   fetchData();
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllProductsCategories());
  }, [dispatch]);

  const categoriesArray = useSelector(selectProductsCategories);
  // const productsArray = useSelector(selectProducts);

  return (
    <Wrapper>
      <TitleAndFilterWrapper>
        <TitlePage title={'Products Page'} />
        <ProductsFilters
          categories={categoriesArray.map((item) => item.title)}
        />
      </TitleAndFilterWrapper>

      <ProductsListWrapper>
        <ProductsList products={products} />
      </ProductsListWrapper>
    </Wrapper>
  );
};

export default ProductsPage;
