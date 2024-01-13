import { useState } from 'react';
import Select from 'react-select';
// import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

// import { setCarsFilter } from '../../redux/filters/filtersSlice';

export const DropdownSelect = ({
  placeholder,
  options,
  // filterType,
  customStyles,
}) => {
  const [selectedValue, setSelectedValue] = useState('');
  // const dispatch = useDispatch();

  const handleDataChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';
    // dispatch(setCarsFilter({ [filterType]: value }));
    setSelectedValue(value);
  };

  const formattedOptions = [
    ...options.map((option) => ({ value: option, label: option })),
  ];

  return (
    <div>
      <Select
        id={nanoid()}
        options={formattedOptions}
        value={formattedOptions.find(
          (option) => option.value === selectedValue
        )}
        isSearchable={false}
        isMulti={false}
        onChange={handleDataChange}
        placeholder={placeholder}
        styles={customStyles}
      />
    </div>
  );
};
