import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Layout';
import Loader from './Loader/Loader';
// import HomePage from '../pages/HomePage';
// import MoviesPage from '../pages/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';

import routes from '../routes';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const MoviesPage = lazy(() => import('../pages/MoviesPage'));

const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage'),
);

const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route path={routes.movies} component={MoviesPage} />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
