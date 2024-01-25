import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../../redux/exercises/constants';
import { getFilter, setFilter } from '../../../redux/exercises/filterSlice';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = (newFilter) => {
    if (filter !== newFilter) {
      dispatch(setFilter(newFilter));
    } else {
      dispatch(setFilter(''));
    }
  };
  console.log(filter);

  return (
    <div>
      <button
        selected={filter === statusFilters.bodyParts}
        onClick={() => handleFilterChange(statusFilters.bodyParts)}
      >
        Body Parts
      </button>
      <button
        selected={filter === statusFilters.muscles}
        onClick={() => handleFilterChange(statusFilters.muscles)}
      >
        Muscles
      </button>
      <button
        selected={filter === statusFilters.equipment}
        onClick={() => handleFilterChange(statusFilters.equipment)}
      >
        Equipment
      </button>
    </div>
  );
};
