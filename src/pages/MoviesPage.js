import { useState, useEffect } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  const match = useRouteMatch();
  // console.log('Match', match);
  // console.log('Loaction', location);
  // console.log('History', history);

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
      .then(response => setMovies([...response.results]))
      .catch(error => setError(error))
      .finally(setLoading(false));
  };

  return (
    <>
      <Searchbar onSubmitForm={handleSubmitQuery} />
      {error && <p>ERRRORRRRR</p>}
      {loading && <Loader />}
      {movies && (
        <Moiveslist
          movieArr={movies}
          matchUrl={match.url}
          movieLocation={location}
        />
      )}
    </>
  );
}

MoviesPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default MoviesPage;
