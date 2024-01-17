import {
  NavText,
  NotProductText,
  Product,
  Svg,
  TitleNav,
  TitleProd,
  WrapA,
} from './DayProducts.styled';
import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/sprite.svg';
import { globalColor } from '../../../styles/root';

const DayProducts = () => {
  return (
    <Product>
      <TitleNav>
        <TitleProd>Products</TitleProd>
        <WrapA>
          <NavLink
            to="/products"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <NavText>Add product</NavText>
            <Svg
              style={{
                width: '16px',
                height: '16px',
              }}
            >
              <use
                href={sprite + '#icon-arrow'}
                style={{
                  stroke: globalColor.colorOrange,
                }}
              />
            </Svg>
          </NavLink>
        </WrapA>
      </TitleNav>

      <NotProductText>Not found products</NotProductText>
    </Product>
  );
};

export default DayProducts;
