import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import MovieReviewsStyle from './MovieReviews.module.css';
import Loader from '../../Loader/Loader';
import Review from '../Review/Review';
import api from '../../../service/api';

class MovieReviews extends Component {
  state = {
    reviews: [],
    error: false,
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });

    api
      .fetchMovieReviews(this.props.match.params.movieId)
      .then(data => this.setState({ reviews: [...data.results] }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    const { reviews, loading } = this.state;

    return (
      <>
        <h3>Reviews</h3>
        {loading && <Loader />}

        {reviews.length > 0 ? (
          <>
            <ul className={MovieReviewsStyle.list}>
              {reviews.map(review => (
                <li key={review.id} className={MovieReviewsStyle.item}>
                  <Review review={review} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Nothing to show</p>
        )}
      </>
    );
  }
}

MovieReviews.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default MovieReviews;
