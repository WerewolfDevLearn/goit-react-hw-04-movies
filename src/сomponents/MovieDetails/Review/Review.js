import React from 'react';
import PropTypes from 'prop-types';
import Interweave from 'interweave';

function Reviews({ review }) {
  return (
    <>
      <h4>{review.author}</h4>
      <p>{<Interweave content={review.content} />}</p>
    </>
  );
}

Reviews.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default Reviews;
