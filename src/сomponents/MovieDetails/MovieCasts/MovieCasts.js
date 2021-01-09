import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import MovieCastsStyle from './MovieCats.module.css';
import Loader from '../../Loader/Loader';
import Cast from '../Cast/Cast';
import api from '../../../service/api';

class MovieCasts extends Component {
  state = {
    casts: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    api
      .fetchMovieCredits(this.props.match.params.movieId)
      .then(data => this.setState({ casts: [...data.cast] }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { casts, loading } = this.state;
    return (
      <>
        <h3>Casts</h3>
        {loading && <Loader />}
        {casts.length > 0 ? (
          <>
            <ul className={MovieCastsStyle.list}>
              {casts &&
                casts.map(cast => (
                  <li key={cast.cast_id} className={MovieCastsStyle.item}>
                    <Cast cast={cast} />
                  </li>
                ))}
            </ul>
          </>
        ) : (
          <p>No data</p>
        )}
      </>
    );
  }
}

MovieCasts.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default MovieCasts;
