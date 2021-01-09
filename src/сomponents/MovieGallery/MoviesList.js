import { NavLink, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieListItem from './MovieListItem/MovieListItem';
import movieListStyle from './MoviesList.module.css';
import routes from '../../routes';

function MovieList({ movieArr, movieLocation }) {
  const match = useRouteMatch();
  let finalUrl = match.url;

  if (match.url === '/') {
    finalUrl = routes.movies;
  }

  // console.log('Match', match);
  // console.log('Match.params', match.params);
  return (
    <ul className={movieListStyle.mList}>
      {movieArr.map(movie => (
        <li key={movie.id}>
          <NavLink
            to={{
              pathname: `${finalUrl}/${movie.id}`,
              state: { from: movieLocation },
            }}
            className={movieListStyle.mListLink}
          >
            <MovieListItem movieName={movie.title} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movieArr: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
  matchUrl: PropTypes.string,
  movieLocation: PropTypes.object,
};

export default MovieList;
