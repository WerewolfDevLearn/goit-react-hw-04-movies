import PropTypes from 'prop-types';
import MovieDetailsStyle from './MoviDetails.module.css';
import getGenres from '../../utils/getGenres';
import getPosterPath from '../../utils/getPosterPath';

function MovieDetails({ movie }) {
  const { genres, overview, popularity, poster_path, title } = movie;
  const posterPath = getPosterPath(poster_path);
  const movieGenres = getGenres(genres);

  return (
    <>
      <div className={MovieDetailsStyle.card}>
        <div className={MovieDetailsStyle.posterContainer}>
          <img src={`${posterPath}`} alt={title} />
        </div>
        <div className={MovieDetailsStyle.details}>
          <h2>{title}</h2>
          <p>User Score:{popularity} </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Geners</h4>
          <p>{movieGenres}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetails;
