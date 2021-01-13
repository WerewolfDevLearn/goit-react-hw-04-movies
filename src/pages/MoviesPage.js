import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import Error from '../сomponents/Error/Error';
import Moiveslist from '../сomponents/MovieGallery/MoviesList';
import Searchbar from '../сomponents/Searchbar/Searchbar';
import Loader from '../сomponents/Loader/Loader';
import api from '../service/api';
import getQparams from '../utils/getQparam';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const { query } = getQparams(location.search);
    if (query) {
      getMovies(query);
    }
  }, [location.search]);

  const handleSubmitQuery = query => {
    history.push({
      pathname: location.pathname,
      search: `query=${query}`,
    });
  };

  const getMovies = query => {
    setLoading(true);
    api
      .fetchMovieByKeyword(query)
      .then(response => {
        setMovies([...response.results]);
      })
      .catch(error => setError(error))
      .finally(setLoading(false));
  };

  return (
    <>
      <Searchbar onSubmitForm={handleSubmitQuery} />
      {error && <Error error={error} />}
      {loading && <Loader />}
      {movies && <Moiveslist movieArr={movies} />}
    </>
  );
}

MoviesPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  // route: ReactRouterPropTypes.route.isRequired,
};

export default MoviesPage;
