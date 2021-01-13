import { useState, useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import MovieList from '../../сomponents/MovieGallery/MoviesList';
import Error from '../../сomponents/Error/Error';
import Loader from '../../сomponents/Loader/Loader';
import api from '../../service/api';

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api
      .fetchPopMovies()
      .then(response => {
        setTrendingMovies(trendingMovies => [
          ...trendingMovies,
          ...response.results,
        ]);
      })
      .catch(error => setError(error))
      .finally(setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(trendingMovies);
  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      <MovieList movieArr={trendingMovies} />
    </>
  );
}

HomePage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  // route: ReactRouterPropTypes.route.isRequired,
};

export default HomePage;
