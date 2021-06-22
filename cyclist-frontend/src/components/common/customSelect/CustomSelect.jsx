import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const CustomSelect = ({
  onChange,
  options,
  defaultValue,
}) => {
  
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'rgba(255, 191, 71, 0.5)' : 'none',
      fontSize: '0.825rem',
      fontWeight: '500',
      padding: 10,
      color: '#000'
    })
  };

  return (
    <Select
      defaultValue={defaultValue}
      options={options} 
      onChange={onChange}
      styles={customStyles}
    />
  );
};

CustomSelect.propTypes = {
  
};

export default CustomSelect;