import PropTypes from 'prop-types';
import CastStyle from './cast.module.css';
import getPosterPath from '../../../utils/getPosterPath';

function Cast({ cast }) {
  const { profile_path, name } = cast;
  const posterPath = getPosterPath(profile_path);
  return (
    <>
      <div className={CastStyle.castContainer}>
        <img src={`${posterPath}`} alt={name} />
        <p>{name}</p>
      </div>
    </>
  );
}

Cast.propTypes = {
  cast: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
};

export default Cast;
