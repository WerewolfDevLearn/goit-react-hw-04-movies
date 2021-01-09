import React from 'react';
import PropTypes from 'prop-types';

function MovieListItem({ movieName }) {
  return (
    <>
      <p>{movieName}</p>
    </>
  );
}

MovieListItem.propTypes = {
  movieName: PropTypes.string.isRequired,
};

export default MovieListItem;
