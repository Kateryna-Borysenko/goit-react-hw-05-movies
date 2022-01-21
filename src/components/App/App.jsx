import Container from 'components/common/Container/Container';
import Appbar from 'components/AppBar/AppBar';
import { Switch, Route } from 'react-router-dom'; //рАутэр
import HomePage from 'components/pages/HomePage/HomePage';
import MoviePage from 'components/pages/MoviePage/MoviePage';
import MovieDetailsPage from 'components/pages/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from 'components/pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Container>
      <Appbar />

      <Switch>
        <Route path="/" exact>
          {/* домашняя страница со списком популярных кинофильмов */}
          <HomePage />
        </Route>

        <Route path="/movies">
          {/* страница поиска фильмов по ключевому слову */}
          <MoviePage />
        </Route>

        <Route path="'/movies/:movieId'">
          {/* страница с детальной информацией о кинофильмеу */}
          <MovieDetailsPage />
        </Route>

        <Route>
          {/* компонент для не существующих страниц */}
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
