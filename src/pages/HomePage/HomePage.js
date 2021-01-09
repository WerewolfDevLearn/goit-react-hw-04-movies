import { useState, useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import MovieList from '../../сomponents/MovieGallery/MoviesList';
import api from '../../service/api';

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    api
      .fetchPopMovies()
      .then(response => {
        setTrendingMovies(trendingMovies => [
          ...trendingMovies,
          ...response.results,
        ]);
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(trendingMovies);
  return (
    <>
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
