import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

const Loading = (props) => {
  const { width, height } = props;

  return (
    <>
      <div
        className="Loading"
        style={{ width, height }}
      />
      <p>Loading...</p>
    </>
  );
};

Loading.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Loading.defaultProps = {
  width: '28px',
  height: '28px',
};

export default Loading;
