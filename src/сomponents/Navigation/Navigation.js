import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import navStyle from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={navStyle.list}>
      <li key="NavigationHome" className={navStyle.listItem}>
        <NavLink to={routes.home} className={navStyle.navLink}>
          Home
        </NavLink>
      </li>
      <li key="NavigationMovies">
        <NavLink to={routes.movies} className={navStyle.navLink}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
