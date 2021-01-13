import React, { useState, useEffect, lazy, Suspense } from 'react';
import {
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import routes from '../../routes';
import Loader from '../../сomponents/Loader/Loader';
import Error from '../../сomponents/Error/Error';
import MovieDetails from '../../сomponents/MovieDetails/MovieDetails';
import AdditionalDetails from '../../сomponents/MovieDetails/AdditionDetailsList/AdditionDetailsList';
import MDPStyle from './MovieDetailsPage.module.css';

import api from '../../service/api';

const MovieCasts = lazy(() =>
  import('../../сomponents/MovieDetails/MovieCasts/MovieCasts.js'),
);

const MovieReviews = lazy(() =>
  import('../../сomponents/MovieDetails/MovieReviews/MovieReviews.js'),
);

function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    console.log(match.params.movieId);
    api
      .fetchMovieDetails(match.params.movieId)
      .then(movie => setMovie(movie))
      .catch(error => setError(error))
      .finally(setLoading(false));
  }, [match.params.movieId]);

  const handlerGoBack = () =>
    history.push(location?.state?.from ?? routes.home);

  return (
    <>
      {error && <Error error={error} />}
      {loading && <Loader />}

      <button type="button" onClick={handlerGoBack} className={MDPStyle.button}>
        Go Back
      </button>

      <hr />

      {movie && <MovieDetails movie={movie} />}
      {movie && <AdditionalDetails path={match.url} />}

      <Suspense fallback={<Loader />}>
        <Route path={`${match.path}/casts`} component={MovieCasts} />
        <Route path={`${match.path}/reviews`} component={MovieReviews} />
      </Suspense>
    </>
  );
}

MovieDetailsPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default MovieDetailsPage;
