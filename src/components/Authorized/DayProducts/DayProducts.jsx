import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/sprite.svg';

import {
  NavText,
  NotProductText,
  ProductsTableWrap,
  Svg,
  TitleNav,
  TitleText,
  NavBlock,
  TableWrapper,
  TableStyled,
  TableTitleArray,
  TableTitleTh,
  BtnDel,
  SvgTableStyled,
  TypeRecommendSwgSpan,
  TableRowStyled,
} from './DayProducts.styled';

import { globalColor } from '../../../styles/root';

const DayProducts = ({ productsArray }) => {
  return (
    <ProductsTableWrap>
      <TitleNav>
        <TitleText>Products</TitleText>
        <NavBlock>
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
        </NavBlock>
      </TitleNav>

      <TableWrapper>
        <div>
          <TableStyled>
            <TableTitleArray>
              <TableTitleTh>Title</TableTitleTh>
              <TableTitleTh>Category</TableTitleTh>
              <TableTitleTh>Calories</TableTitleTh>
              <TableTitleTh>Weight</TableTitleTh>
              <TableTitleTh>Recommend</TableTitleTh>
            </TableTitleArray>

            <tbody
              // key={product._id}
              // as={motion.tbody}
              initial={{ x: 900 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ x: -900 }}
            >
              <TableRowStyled>
                {/* <td>{product.title}</td>

                <td>{product.category}</td>

                <td>{product.calories}</td>

                <td>{product.amount}</td> */}

                <td>
                  <TypeRecommendSwgSpan />
                </td>

                <td>
                  <BtnDel>
                    <SvgTableStyled>
                      <use href={`${sprite}#icon-trash-03`} />
                    </SvgTableStyled>
                  </BtnDel>
                </td>
              </TableRowStyled>
            </tbody>
          </TableStyled>
        </div>
      </TableWrapper>

      {/* <NotProductText>Not found products</NotProductText> */}
    </ProductsTableWrap>
  );
};

export default DayProducts;
