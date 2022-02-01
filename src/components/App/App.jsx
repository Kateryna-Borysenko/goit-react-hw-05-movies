import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom'; //рАутэр
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/common/Container/Container';
import Appbar from 'components/AppBar/AppBar';
import Spinner from 'components/common/Spinner/Spinner';
//!статический рендер заменяем на динамический
// import HomePage from 'components/pages/HomePage/HomePage';
// import MoviePage from 'components/pages/MoviePage/MoviePage';
// import MovieDetailsPage from 'components/pages/MovieDetailsPage/MovieDetailsPage';
// import NotFoundPage from 'components/pages/NotFoundPage/NotFoundPage';

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
//!

function App() {
  return (
    <Container>
      <Appbar />

      {/* <Suspense fallback={<h2>Loading ...</h2>}> */}
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact>
            {/* домашняя страница со списком популярных кинофильмов */}
            <HomePage />
          </Route>

          <Route exact path="/movies">
            {/* страница поиска фильмов по ключевому слову */}
            <MoviePage />
          </Route>

          <Route path="/movies/:movieId">
            {/* страница с детальной информацией о кинофильме */}
            <MovieDetailsPage />
          </Route>

          <Route>
            {/* компонент для не существующих страниц */}
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
