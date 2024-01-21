import { Suspense, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Select from 'react-select';
import { nanoid } from 'nanoid';

import { Loader } from '../../Loader/Loader';

import { fetchProducts } from '../../../redux/products/productsOperation';

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
  ErrorMessage,
} from './ProductsFilters.styled';

import sprite from '../../../assets/sprite.svg';

export const ProductsFilters = ({ categories }) => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
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
    { value: 'recommended', label: 'Recommended' },
    { value: 'not-recommended', label: 'Not recommended' },
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
    const isTitleValid = searchByProductTitle.length <= 40;

    if (!isTitleValid) {
      setError(
        `Please enter up to 30 characters, now ${searchByProductTitle.length}`
      );
      setIsError(true);
    } else {
      setError('');
      setIsError(false);

      try {
        dispatch(fetchProducts(formData));
      } catch (error) {
        toast.error('Network error:', error);
      }
    }
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setIsActive(text.length > 0);
    setSearchByProductTitle(text);
  };

  const handleCleanButton = () => {
    setIsActive(false);
    setSearchByProductTitle('');

    const formData = {
      title: '',
      category: selectedCategory || null,
      filter: selectedType || 'all',
    };
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
    dispatch(fetchProducts(formData));
  };

  return (
    <>
      <StyledForm onSubmit={applyFilter} noValidate>
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

          {isError && (
            <ErrorMessage>
              <svg>
                <use href={sprite + '#icon-checkbox-circle-fill'} />
              </svg>
              {error}
            </ErrorMessage>
          )}
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
