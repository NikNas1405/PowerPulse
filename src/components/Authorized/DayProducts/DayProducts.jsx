import {
  NavText,
  NotProductText,
  Product,
  Svg,
  TitleNav,
  TitleText,
  Wrap,
} from './DayProducts.styled';
import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/sprite.svg';
import { globalColor } from '../../../styles/root';
import DayProdTable from '../DayProdTable/DayProdTable';

const DayProducts = () => {
  return (
    <Product>
      <TitleNav>
        <TitleText>Products</TitleText>
        <Wrap>
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
        </Wrap>
      </TitleNav>
      <DayProdTable />
      <NotProductText>Not found products</NotProductText>
    </Product>
  );
};

export default DayProducts;
