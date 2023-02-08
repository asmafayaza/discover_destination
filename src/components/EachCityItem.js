  import React from 'react';
  import PropTypes from 'prop-types';

  const EachCityItem = (props) => {
    const selectCity = () => props.selectCity(props.city);

    return (
      <li onClick={selectCity} className='city-item'>
        {props.city.name}({props.city.code})
      </li>
    );
  };

  export default EachCityItem;

  EachCityItem.propTypes = {
    city: PropTypes.object.isRequired,
    selectCity: PropTypes.func.isRequired,
  };
