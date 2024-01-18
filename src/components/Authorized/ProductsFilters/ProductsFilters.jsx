import { Suspense, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Select from 'react-select';
import { nanoid } from 'nanoid';

import { Loader } from '../../Loader/Loader';

import {
  StyledForm,
  InputStyled,
  InputPartWrapper,
  SvgWrapper,
  SvgCleanWrapper,
  ButtonWrapper,
  DropdownSelectPartWrapper,
  categoriesStyles,
  typesStyles,
} from './ProductsFilters.styled';

import sprite from '../../../assets/sprite.svg';
import { fetchProducts } from '../../../redux/products/productsOperation';

export const ProductsFilters = ({ categories }) => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [searchByProductTitle, setSearchByProductTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const categoriesArrayFormatted = categories.map(
    (el) => el[0].toUpperCase() + el.slice(1).toLowerCase()
  );

  const formattedOptions = (options) => {
    return [...options.map((option) => ({ value: option, label: option }))];
  };

  const typesArray = [
    { value: 'all', label: 'All' },
    { value: 'recommended', label: 'Recommended ' },
    { value: 'notRecommended', label: 'Not recommended' },
  ];

  const applyFilter = (e) => {
    if (e) {
      e.preventDefault();
    }
    const formData = {
      title: searchByProductTitle || '',
      category: selectedCategory || null,
      filter: selectedType || 'all',
    };

    console.log(formData);

    dispatch(fetchProducts(formData));
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setIsActive(text.length > 0);
    setSearchByProductTitle(text.trim());
  };

  const handleCleanButton = () => {
    setIsActive(false);
    setSearchByProductTitle('');

    const formData = {
      title: '',
      category: selectedCategory || null,
      filter: selectedType || 'all',
    };

    console.log(formData);

    dispatch(fetchProducts(formData));
  };

  const handleCategoryChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : null;
    setSelectedCategory(value);

    const formData = {
      title: searchByProductTitle || '',
      category: value,
      filter: selectedType || 'all',
    };

    console.log(formData);

    dispatch(fetchProducts(formData));
  };

  const handleTypeChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value.toLowerCase() : 'all';
    setSelectedType(value);

    const formData = {
      title: searchByProductTitle || '',
      category: selectedCategory || null,
      filter: value,
    };

    console.log(formData);

    dispatch(fetchProducts(formData));
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
            onChange={handleCategoryChange}
            placeholder={'Categories'}
            styles={categoriesStyles}
          />

          <Select
            id={nanoid()}
            options={typesArray}
            value={typesArray.find((option) => option.value === selectedType)}
            isSearchable={false}
            isMulti={false}
            isClearable
            onChange={handleTypeChange}
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
