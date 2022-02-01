import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/common/Container/Container';
import Appbar from 'components/AppBar/AppBar';
import Spinner from 'components/common/Spinner/Spinner';

const HomePage = lazy(() =>
  import(
    'components/pages/HomePage/HomePage' /* webpackChunkName: "HomePage" */
  ),
);
const MoviePage = lazy(() =>
  import(
    'components/pages/MoviePage/MoviePage' /* webpackChunkName: "MoviePage" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    'components/pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const NotFoundPage = lazy(() =>
  import(
    'components/pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "NotFoundPage" */
  ),
);

function App() {
  return (
    <Container>
      <Appbar />

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route exact path="/movies">
            <MoviePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
