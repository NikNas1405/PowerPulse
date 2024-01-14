import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InputPartWrapper = styled.div`
  position: relative;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 14px;
  height: 46px;
  border-radius: 12px;
  border: 1px solid ${globalColor.colorInput};
  background: transparent;
  color: ${globalColor.colorWhite};
  font-size: 14px;
  line-height: 1.42857;

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus,
  &:active {
    border: 1px solid ${globalColor.colorOrange};
  }

  @media (min-width: 768px) {
    width: 236px;
    height: 52px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  left: auto;
  bottom: auto;
  display: flex;
  gap: 8px;

  > button {
    display: block;
    width: 18px;
    height: 18px;
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;
  }
`;

export const SvgWrapper = styled.svg`
  stroke: ${globalColor.colorWhite};
`;

export const SvgCleanWrapper = styled.svg`
  stroke: ${globalColor.colorOrange};
`;

export const DropdownSelectPartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const categoriesStyles = {
  singleValue: (styles) => ({
    ...styles,
    color: `${globalColor.colorWhite}`,
  }),

  control: (styles, { isSelected }) => ({
    ...styles,
    display: 'flex',
    color: isSelected
      ? `${globalColor.colorBeige}`
      : `${globalColor.colorWhite}`,
    backgroundColor: 'transparent',
    width: '146px',
    borderRadius: '12px',
    padding: '14px',
    lineHeight: '1.2857',
    fontSize: '14px',
    fontWeight: '400',
    outline: 'none',
    border: `1px solid ${globalColor.colorInput}`,
    boxShadow: 'none',
    cursor: 'pointer',
    wordWrap: 'break-word',

    ':hover': {
      border: `1px solid ${globalColor.colorOrange}`,
    },

    ':active': {
      border: `1px solid ${globalColor.colorOrange}`,
    },

    ':focus': {
      outline: 'none',
      border: `1px solid ${globalColor.colorOrange}`,
    },

    '@media (min-width: 768px)': {
      fontSize: '16px',
      lineHeight: '1.5',
      width: '192px',
      height: '52px',
    },
  }),

  option: (styles, { isHover, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    color: isSelected
      ? `${globalColor.colorOrange1}`
      : isFocused
      ? `${globalColor.colorBeige}`
      : isHover
      ? `${globalColor.colorBeige}`
      : `${globalColor.colorWhite}`,

    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.2857',
    cursor: 'pointer',

    backgroundColor: isDisabled
      ? 'none'
      : isSelected
      ? `${globalColor.colorInput}`
      : //   : isFocused
        //   ? `${globalColor.colorInput}`
        //   : isHover
        //   ? `${globalColor.colorInput}`
        'transparent',

    ':active': {
      ...styles[':active'],
      backgroundColor: isSelected ? `${globalColor.colorInput}` : 'none',
    },
  }),

  menu: (styles) => ({
    ...styles,
    backgroundColor: '#1C1C1C',
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
  }),

  menuList: (provided) => ({
    ...provided,

    boxSizing: 'content-box',
    '&::-webkit-scrollbar': {
      width: '6px',
      position: 'relative',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '12px',
      background: 'rgba(239, 237, 232, 0.1)',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  valueContainer: (styles) => ({
    ...styles,
    padding: '0px',
    margin: '0px',
  }),

  clearIndicator: (provided) => ({
    ...provided,
    padding: 0,
    color: `${globalColor.colorWhite}`,
    cursor: 'pointer',
    ':hover': {
      color: `${globalColor.colorOrange}`,
    },
  }),

  dropdownIndicator: (styles, state) => ({
    ...styles,
    padding: 0,
    color: `${globalColor.colorWhite}`,
    transition: 'all .3s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),

  placeholder: (styles) => ({
    ...styles,
    color: `${globalColor.colorWhite}`,
  }),
};

export const typesStyles = {
  singleValue: (styles) => ({
    ...styles,
    color: `${globalColor.colorWhite}`,
  }),

  control: (styles, { isSelected }) => ({
    ...styles,
    display: 'flex',
    color: isSelected
      ? `${globalColor.colorBeige}`
      : `${globalColor.colorWhite}`,
    backgroundColor: 'transparent',
    width: '173px',
    borderRadius: '12px',
    padding: '14px',
    lineHeight: '1.2857',
    fontSize: '14px',
    fontWeight: '400',
    outline: 'none',
    border: `1px solid ${globalColor.colorInput}`,
    boxShadow: 'none',
    cursor: 'pointer',
    wordWrap: 'break-word',

    ':hover': {
      border: `1px solid ${globalColor.colorOrange}`,
    },

    ':active': {
      border: `1px solid ${globalColor.colorOrange}`,
    },

    ':focus': {
      outline: 'none',
      border: `1px solid ${globalColor.colorOrange}`,
    },

    '@media (min-width: 768px)': {
      fontSize: '16px',
      lineHeight: '1.5',
      width: '204px',
      height: '52px',
    },
  }),

  option: (styles, { isHover, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    color: isSelected
      ? `${globalColor.colorOrange1}`
      : isFocused
      ? `${globalColor.colorBeige}`
      : isHover
      ? `${globalColor.colorBeige}`
      : `${globalColor.colorWhite}`,

    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.2857',
    cursor: 'pointer',

    backgroundColor: isDisabled
      ? 'none'
      : isSelected
      ? `${globalColor.colorInput}`
      : //   : isFocused
        //   ? `${globalColor.colorInput}`
        //   : isHover
        //   ? `${globalColor.colorInput}`
        'transparent',

    ':active': {
      ...styles[':active'],
      backgroundColor: isSelected ? `${globalColor.colorInput}` : 'transparent',
    },
  }),

  menu: (styles) => ({
    ...styles,
    backgroundColor: '#1C1C1C',
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
  }),

  menuList: (provided) => ({
    ...provided,

    boxSizing: 'content-box',
    '&::-webkit-scrollbar': {
      width: '6px',
      position: 'relative',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '12px',
      background: 'rgba(239, 237, 232, 0.1)',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  valueContainer: (styles) => ({
    ...styles,
    padding: '0px',
    margin: '0px',
  }),

  clearIndicator: (provided) => ({
    ...provided,
    padding: 0,
    color: `${globalColor.colorWhite}`,
    cursor: 'pointer',
    ':hover': {
      color: `${globalColor.colorOrange}`,
    },
  }),

  dropdownIndicator: (styles, state) => ({
    ...styles,
    padding: 0,
    color: `${globalColor.colorWhite}`,
    transition: 'all .3s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),

  placeholder: (styles) => ({
    ...styles,
    color: `${globalColor.colorWhite}`,
  }),
};
