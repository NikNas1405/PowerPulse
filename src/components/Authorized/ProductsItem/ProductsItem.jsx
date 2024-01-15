import {
  ProductsItemStyled,
  DietSpan,
  SvgWrapper,
  Text,
  Title,
  Button,
  WrapperTitle,
  WrapperText,
} from './ProductsItem.styled';

import { globalColor } from '../../../styles/root';

import sprite from '../../../assets/sprite.svg';

export const ProductsItem = ({
  product,
  type,
  title,
  calories,
  category,
  weight,
  handleOpenModal,
}) => {
  const formatted = (options) => {
    return [
      ...options.map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase()),
    ];
  };

  const formattedTitle = formatted([title])[0];
  const formattedCategory = formatted([category])[0];

  let TypeFoods;

  if (type) {
    TypeFoods = 'Recommended';
  } else TypeFoods = 'Not recommended';

  return (
    <ProductsItemStyled>
      <DietSpan>DIET</DietSpan>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          alignSelf: 'flex-end',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <SvgWrapper>
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
          </SvgWrapper>
          <Text>{TypeFoods}</Text>
        </div>
        <Button onClick={() => handleOpenModal(product)}>
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
                stroke: globalColor.colorOrange,
              }}
            />
          </SvgWrapper>
        </Button>
      </div>

      <WrapperTitle>
        <svg style={{ flexShrink: 0, width: '24px', height: '24px' }}>
          <use href={sprite + '#icon-running-stick-figure-svgrepo-com-1'} />
        </svg>

        <Title>{formattedTitle}</Title>
      </WrapperTitle>

      <WrapperText>
        <Text>
          <span>Calories: </span>
          {calories}
        </Text>
        <Text>
          <span>Category: </span>
          {formattedCategory}
        </Text>
        <Text>
          <span>Weight: </span>
          {weight}
        </Text>
      </WrapperText>
    </ProductsItemStyled>
  );
};
