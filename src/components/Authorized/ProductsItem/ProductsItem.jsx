import {
  ProductsItemStyled,
  DietSpan,
  SvgWrapper,
} from './ProductsItem.styled';

import { globalColor } from '../../../styles/root';

import sprite from '../../../assets/sprite.svg';

export const ProductsItem = ({ type, title, calories, category, weight }) => {
  let TypeFoods;

  if (type) {
    TypeFoods = 'Recommended';
  } else TypeFoods = 'Not recommended';

  return (
    <ProductsItemStyled>
      <DietSpan>DIET</DietSpan>
      <div>
        <SvgWrapper>
          {type ? (
            <use
              href={sprite + '#icon-Ellipse-82'}
              style={{ fill: globalColor.colorSecondaryGreen }}
            />
          ) : (
            <use
              href={sprite + '#icon-Ellipse-82'}
              style={{
                fill: globalColor.colorSecondaryRed,
              }}
            />
          )}
        </SvgWrapper>
        <p>{TypeFoods}</p>
      </div>
      <button>
        Add
        <SvgWrapper
          style={{
            width: '16px',
            height: '16px',
          }}
        >
          <use
            href={sprite + '#icon-arrow'}
            style={{
              stroke: globalColor.colorSecondaryRed,
            }}
          />
        </SvgWrapper>
      </button>

      <svg>
        <use href={sprite + '#icon-arrow'} />
      </svg>
      <h2>{title}</h2>
      <div>
        <span>Calories: </span>
        <p>{calories}</p>
      </div>
      <div>
        <span>Category: </span>
        <p>{category}</p>
      </div>
      <div>
        <span>Weight: </span>
        <p>{weight}</p>
      </div>
    </ProductsItemStyled>
  );
};
