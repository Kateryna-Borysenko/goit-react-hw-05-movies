import { lazy, Suspense } from 'react';
import { fetchMovieById } from 'services/api';
import { useState, useEffect } from 'react';
import {
  useParams,
  useHistory,
  NavLink,
  useRouteMatch,
  Route,
  Switch,
} from 'react-router-dom'; //позволит вытащить id
import s from './MovieDetailsPage.module.css';
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
  const [movie, setMovie] = useState({});
  const { url, path } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.goBack(); //goBack() - встроеный метод браузера
  };

  const {
    original_name,
    original_title,
    release_date,
    poster_path,
    vote_average,
    overview,
    genres,
  } = movie;

  return (
    <div className={s.contentWrap}>Test</div>

    // <>
    //   {movie && (
    //     <>
    //       <div className={s.wrap}>
    //         <button className={s.button} type="button" onClick={onGoBack}>
    //           ⬅ Go back
    //         </button>
    //         <h3 className={s.title}>{original_title || original_name}</h3>
    //         <span className={s.releaseData}>{release_date.slice(0, 4)}</span>
    //         {poster_path && (
    //           <img
    //             className={s.image}
    //             src={`https://image.tmdb.org/t/p/w500${poster_path}`}
    //             alt={original_title}
    //           />
    //         )}
    //         <div className={s.contentWrap}>
    //           <div>
    //             <span className={s.score}>User Score : </span>
    //             <span className={s.scoreValue}> {vote_average * 10} %</span>
    //             <h4 className={s.subtitle}>Overview</h4>
    //             <p className={s.description}>{overview}</p>
    //             <h4 className={s.subtitle}>Genres</h4>
    //             <hr />
    //             <p className={s.genreValues}>
    //               {genres.map(genre => genre.name).join(' | ')}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <NavLink
    //         className={s.link}
    //         activeClassName={s.activeLink}
    //         to={`${url}/cast`}
    //       >
    //         Cast
    //       </NavLink>
    //       <NavLink
    //         className={s.link}
    //         activeClassName={s.activeLink}
    //         to={`${url}/reviews`}
    //       >
    //         Reviews
    //       </NavLink>
    //     </>
    //   )}

    //   <Suspense fallback={<h2>Loading ...</h2>}>
    //     <Switch>
    //       <Route path={`${path}/cast`}>
    //         <Cast movieId={movieId} />
    //       </Route>

    //       <Route path={`${path}/reviews`}>
    //         <Reviews movieId={movieId} />
    //       </Route>
    //     </Switch>
    //   </Suspense>
    // </>
  );
};

export default MovieDetailsPage;
