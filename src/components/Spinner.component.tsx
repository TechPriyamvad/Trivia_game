import React, { Fragment } from 'react';
import spinner from '../images/spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '250px',display: 'block',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}
      alt="Loading..."
    />
  </Fragment>
);

export default Spinner;