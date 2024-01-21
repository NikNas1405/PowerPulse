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
  DeleteBtn,
  SvgTableStyled,
  TypeRecommendSwgSpan,
  TableRowStyled,
  TableDataStyled,
} from './DayProducts.styled';

import { globalColor } from '../../../styles/root';
import { selectUser } from '../../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const DayProducts = ({ productsArray, handleDeleteButtonClick }) => {
  const currentUser = useSelector(selectUser);
  const userBloodType = currentUser.blood;

  let FoodRecommended;
  let type;

  if (productsArray) {
    type = productsArray.map(
      (product) => product.productId.groupBloodNotAllowed[userBloodType]
    );
  }

  if (type) {
    FoodRecommended = 'Yes';
  } else FoodRecommended = 'No';

  return (
    <ProductsTableWrap>
      {productsArray ? (
        <>
          <TitleNav>
            <TitleText>Products</TitleText>
            <NavBlock>
              <NavLink
                to="/products"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <NavText>Add product</NavText>
                <Svg>
                  <use href={sprite + '#icon-arrow'} />
                </Svg>
              </NavLink>
            </NavBlock>
          </TitleNav>
          <TableWrapper>
            <div>
              <TableStyled>
                <TableTitleArray>
                  <tr>
                    <TableTitleTh>Title</TableTitleTh>
                    <TableTitleTh>Category</TableTitleTh>
                    <TableTitleTh>Calories</TableTitleTh>
                    <TableTitleTh>Weight</TableTitleTh>
                    <TableTitleTh>Recommend</TableTitleTh>
                  </tr>
                </TableTitleArray>

                <tbody>
                  {productsArray.map((product) => (
                    <TableRowStyled key={product._id} item={product}>
                      <TableDataStyled>
                        {product.productId.title}
                      </TableDataStyled>
                      <TableDataStyled>
                        {product.productId.category}
                      </TableDataStyled>
                      <TableDataStyled>{product.calories}</TableDataStyled>
                      <TableDataStyled>{product.amount}</TableDataStyled>
                      <TableDataStyled>
                        <div
                          style={{
                            display: 'flex',
                            gap: '8px',
                            alignItems: 'center',
                            height: '24px',
                          }}
                        >
                          <svg
                            style={{
                              width: '14px',
                              height: '14px',
                            }}
                          >
                            {type ? (
                              <use
                                href={sprite + '#icon-Ellipse-82'}
                                style={{
                                  fill: globalColor.colorSecondaryGreen,
                                  stroke: globalColor.colorSecondaryGreen,
                                }}
                              />
                            ) : (
                              <use
                                href={sprite + '#icon-Ellipse-82'}
                                style={{
                                  fill: globalColor.colorSecondaryRed,
                                  stroke: globalColor.colorSecondaryRed,
                                }}
                              />
                            )}
                          </svg>
                          <TypeRecommendSwgSpan>
                            {FoodRecommended}
                          </TypeRecommendSwgSpan>
                        </div>
                      </TableDataStyled>
                      <TableDataStyled>
                        <DeleteBtn
                        // onClick={() =>
                        //   handleDeleteButtonClick({ id: product._id })
                        // }
                        >
                          <SvgTableStyled>
                            <use href={sprite + `#icon-trash`}></use>
                          </SvgTableStyled>
                        </DeleteBtn>
                      </TableDataStyled>
                    </TableRowStyled>
                  ))}
                </tbody>
              </TableStyled>
            </div>
          </TableWrapper>
        </>
      ) : (
        <NotProductText>Not found products</NotProductText>
      )}
    </ProductsTableWrap>
  );
};

export default DayProducts;
