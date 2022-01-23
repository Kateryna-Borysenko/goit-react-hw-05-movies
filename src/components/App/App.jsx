import Container from 'components/common/Container/Container';
import Appbar from 'components/AppBar/AppBar';
import { Switch, Route } from 'react-router-dom'; //рАутэр
import HomePage from 'components/pages/HomePage/HomePage';
import MoviePage from 'components/pages/MoviePage/MoviePage';
import MovieDetailsPage from 'components/pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from 'components/pages/NotFoundPage/NotFoundPage';
import { ToastContainer } from 'react-toastify';

// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

function App() {
  return (
    <Container>
      <Appbar />

      {/* test item */}
      {/* <Cast movieId={'634649'} />
      <Reviews movieId={'559'} /> */}

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
          {/* страница с детальной информацией о кинофильмеу */}
          <MovieDetailsPage />
        </Route>

        <Route>
          {/* компонент для не существующих страниц */}
          <NotFoundPage />
        </Route>
      </Switch>
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
