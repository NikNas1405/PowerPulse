import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Select from 'react-select';
import { nanoid } from 'nanoid';
// import { useSelector, useDispatch } from 'react-redux';

import { Loader } from '../../Loader/Loader';

import {
  InputStyled,
  StyledForm,
  InputPartWrapper,
  SvgWrapper,
  SvgCleanWrapper,
  ButtonWrapper,
  DropdownSelectPartWrapper,
  categoriesStyles,
  typesStyles,
} from './ProductsFilters.styled';

import sprite from '../../../assets/sprite.svg';
// import { fetchFilteredProducts } from '../../../redux/products/productsOperation';

export const ProductsFilters = () => {
  // const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [searchByProductTitle, setSearchByProductTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const categoriesArray = [
    'alcoholic drinks',
    'berries',
    'cereals',
    'dairy',
    'dried fruits',
    'eggs',
    'fish',
    'flour',
    'fruits',
    'meat',
    'mushrooms',
    'nuts',
    'oils and fats',
    'poppy',
    'sausage',
    'seeds',
    'sesame',
    'soft drinks',
    'vegetables and herbs',
  ]; //тут має прийти відповідь від беку з переліком, а не хардкод

  // const categoriesArray = dispatch(fetchAllProductsCategories());

  const categoriesArrayFormatted = categoriesArray.map(
    (el) => el[0].toUpperCase() + el.slice(1).toLowerCase()
  );

  const formattedOptions = (options) => {
    return [...options.map((option) => ({ value: option, label: option }))];
  };



  const typesArray = ['All', 'Recommended', 'Not recommended'];

  const applyFilter = (e) => {
    e.preventDefault();
    // const formData = {
    //   search: searchByProductTitle,
    //   category: selectedCategory,
    //   recommended: selectedType,
    // };

    // dispatch(fetchFilteredProducts(formData));
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setIsActive(text.length > 0);
    setSearchByProductTitle(text);
  };

  const handleCleanButton = () => {
    setIsActive(false);
    setSearchByProductTitle('');
  };

  const handleDataChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';
    setSelectedCategory(value);
    setSelectedType(value);
  };

  return (
    <>
      <StyledForm onSubmit={applyFilter}>
        <InputPartWrapper>
          <InputStyled
            type="text"
            name="title"
            placeholder="Search"
            value={searchByProductTitle}
            onChange={handleInputChange}
          />
          <ButtonWrapper>
            {isActive && (
              <button type="button" onClick={handleCleanButton}>
                <SvgCleanWrapper>
                  <use href={sprite + '#icon-x'} />
                </SvgCleanWrapper>
              </button>
            )}
            <button type="submit">
              <SvgWrapper>
                <use href={sprite + '#icon-search'} />
              </SvgWrapper>
            </button>
          </ButtonWrapper>
        </InputPartWrapper>
        <DropdownSelectPartWrapper>
          <Select
            id={nanoid()}
            options={formattedOptions(categoriesArrayFormatted)}
            value={formattedOptions(categoriesArrayFormatted).find(
              (option) => option.value === selectedCategory
            )}
            isSearchable={false}
            isMulti={false}
            isClearable
            onChange={handleDataChange}
            placeholder={'Categories'}
            styles={categoriesStyles}
          />
          <Select
            id={nanoid()}
            options={formattedOptions(typesArray)}
            value={formattedOptions(typesArray).find(
              (option) => option.value === selectedType
            )}
            isSearchable={false}
            isMulti={false}
            isClearable
            onChange={handleDataChange}
            placeholder={'All'}
            styles={typesStyles}
          />
        </DropdownSelectPartWrapper>
      </StyledForm>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
