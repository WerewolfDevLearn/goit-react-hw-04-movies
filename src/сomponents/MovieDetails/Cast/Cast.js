import PropTypes from 'prop-types';
import CastStyle from './Cast.module.css';
import getAvatarPath from '../../../utils/getAvatarPath';

function Cast({ cast }) {
  const { profile_path, name } = cast;
  const posterPath = getAvatarPath(profile_path);
  return (
    <>
      <div className={CastStyle.castContainer}>
        <div className={CastStyle.imgContainer}>
          <img src={`${posterPath}`} alt={name} />
        </div>
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
