import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '../../Loader/Loader';
import { DropdownSelect } from './DropdownSelect';

export const ProductsFilters = () => {
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

  const typesArray = ['All', 'Recommended', 'Not recommended'];

  const applyFilter = (e) => {
    e.preventDefault();
    // const { make } = formData;
    // if (make === null) return;
    // dispatch(fetchFilteredAllCars(formData));
  };

  return (
    <>
      <form onSubmit={applyFilter}>
        <div>
          <input type="text" />
          <button type="submit">
            <svg>
              <use></use>
            </svg>
          </button>
          <button type="button">
            <svg>
              <use></use>
            </svg>
          </button>
        </div>
        <DropdownSelect
          placeholder={'Categories'}
          options={categoriesArray}
          filterType={'category'}
          // customStyles={categoriesStyles}
        />
        <DropdownSelect
          placeholder={'All'}
          options={typesArray}
          filterType={'type'}
          // customStyles={typesStyles}
        />
      </form>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
