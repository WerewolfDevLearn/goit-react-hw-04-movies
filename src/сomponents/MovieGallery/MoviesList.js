import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieListItem from './MovieListItem/MovieListItem';
import movieListStyle from './MoviesList.module.css';
import routes from '../../routes';

function MovieList({ movieArr }) {
  const match = useRouteMatch();
  let finalUrl = match.url;

  if (match.url === '/') {
    finalUrl = routes.movies;
  }

  return (
    <ul className={movieListStyle.mList}>
      {movieArr.map(movie => (
        <MovieListItem movie={movie} finalUrl={finalUrl} key={movie.id} />
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movieArr: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      popularity: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieList;
