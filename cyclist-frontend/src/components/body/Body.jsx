import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from '../table/Table';
import CustomScatterChart from '../common/customScatterChart/CustomScatterChart';
import CustomSelect from '../common/customSelect/CustomSelect';
import './Body.css';

const Body = ({ data }) => {
  console.log(data);
  const dates = data.map((item) => item.päivämäärä);
  let uniqueDates = [...new Set(dates)];
  uniqueDates = uniqueDates.map((item) => ({value: item, label: item}));
  const [ from, setFrom ] = useState(uniqueDates[150]);
  const [ to, setTo] = useState(uniqueDates[180]);
  const filteredData = data.filter((item) => item.päivämäärä > from.value && item.päivämäärä < to.value);

  const handleChange = (endpoint) => (selected) => {
    console.log(endpoint);
    if (endpoint === 'from') {
      setFrom(selected);
    };

    if (endpoint === 'to') {
      setTo(selected);
    };
  } 

  return (
    <>
      <p>Valitse aikaväli</p>
      <div className="flex flex-jc-sb">
        <div className="time-selector-container">
          <p>Alkaen</p>
          <CustomSelect
            defaultValue={from}
            options={uniqueDates}
            onChange={handleChange('from')}
          />
        </div>
        <div className="time-selector-container">
          <p>Päättyen</p>
          <CustomSelect
            defaultValue={to}
            options={uniqueDates}
            onChange={handleChange('to')}
          />
        </div>
      </div>
      <CustomScatterChart data={filteredData} heading="Ilman lämpötilan suhde pyöräilijöiden määrään" />
      <Table locationData={filteredData}/>
    </>
  )
};

Body.propTypes = {
  
};

export default Body;