import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import getPosterPath from '../../../utils/getPosterPath';
import MLIStl from './MovieListItem.module.css';

function MovieListItem({ movie, finalUrl }) {
  const { poster_path, title } = movie;
  const posterPath = getPosterPath(poster_path);
  const location = useLocation();

  return (
    <li>
      <NavLink
        to={{
          pathname: `${finalUrl}/${movie.id}`,
          state: { from: location },
        }}
        className={MLIStl.mListLink}
      >
        <div className={MLIStl.movieCard}>
          <div className={MLIStl.posterContainer}>
            <img src={`${posterPath}`} alt={title} />
          </div>
          <p className={MLIStl.movieName}>{title}</p>
        </div>
      </NavLink>
    </li>
  );
}

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieListItem;
