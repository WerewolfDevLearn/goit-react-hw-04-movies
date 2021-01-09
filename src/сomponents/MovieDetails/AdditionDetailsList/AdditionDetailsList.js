import React from 'react';
import PorpTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AdditionDetailsList({ path }) {
  return (
    <>
      <h3>Addition Iformation</h3>
      <ul>
        <li key="casts">
          <Link to={`${path}/casts`}>Casts</Link>
        </li>
        <li key="reviews">
          <Link to={`${path}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <hr />
    </>
  );
}

AdditionDetailsList.propTypes = {
  path: PorpTypes.string.isRequired,
};

export default AdditionDetailsList;
