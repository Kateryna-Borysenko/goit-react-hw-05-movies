import { lazy, Suspense } from 'react';
import { fetchMovieById } from 'services/api';
import { useState, useEffect } from 'react';
import {
  useParams, //позволит вытащить id
  useHistory,
  NavLink,
  useRouteMatch,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import Spinner from 'components/common/Spinner/Spinner';
//!статический рендер заменяем на динамический
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

const Cast = lazy(() =>
  import('components/Cast/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('components/Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);
//!

const MovieDetailsPage = () => {
  const { movieId } = useParams(); //возвращает динамический прараметр //! :movieId
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const history = useHistory(); //!
  // const location = useLocation(); //!
  // console.log(history);
  // console.log(location);
  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  //просто переход шаг назад goForward-вперёд push
  const onGoBack = () => {
    history.goBack(); //goBack() - встроеный метод браузера
  };

  // const onGoBack = () => {
  //   history.push(location?.state?.from ?? '/');
  // };

  return (
    <>
      {movie && (
        <>
          <div className={s.wrap}>
            <button className={s.button} type="button" onClick={onGoBack}>
              ⬅ Go back
            </button>
            <h3 className={s.title}>
              {movie.original_title || movie.original_name}
            </h3>
            <span className={s.releaseData}>
              {movie.release_date.slice(0, 4)}
            </span>
            {movie.poster_path && (
              <img
                className={s.image}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
              />
            )}
            <div className={s.contentWrap}>
              <div>
                <span className={s.score}>User Score : </span>
                <span className={s.scoreValue}>
                  {' '}
                  {movie.vote_average * 10} %
                </span>
                <h4 className={s.subtitle}>Overview</h4>
                <p className={s.description}>{movie.overview}</p>
                <h4 className={s.subtitle}>Genres</h4>
                <hr />
                <p className={s.genreValues}>
                  {movie.genres.map(genre => genre.name).join(' | ')}
                </p>
              </div>
            </div>
          </div>
          <NavLink
            className={s.link}
            activeClassName={s.activeLink}
            to={`${url}/cast`}
          >
            Cast
          </NavLink>
          <NavLink
            className={s.link}
            activeClassName={s.activeLink}
            to={`${url}/reviews`}
          >
            Reviews
          </NavLink>
        </>
      )}

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
