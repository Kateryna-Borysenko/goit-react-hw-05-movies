import { fetchMovieById } from 'services/api';
import { useState, useEffect } from 'react';
import {
  useParams,
  useHistory,
  Link,
  useRouteMatch,
  Route,
  Switch,
} from 'react-router-dom'; //позволит вытащить id
import s from './MovieDetailsPage.module.css';
import Cast from 'components/cast/Cast';

const MovieDetailsPage = () => {
  const { movieId } = useParams(); //возвращает динамический прараметр //! :movieId
  const [movie, setMovie] = useState({});
  const { url, path } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  // useEffect(() => {
  //   const getMovie = async () => {
  //     try {
  //       const movie = await fetchMovieById(movieId);

  //       setMovie({ ...movie });
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       console.log('Лоудер');
  //     }
  //   };
  //   getMovie();
  // }, [movieId]);

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
    //   <div className={s.wrap}>
    //     <button className={s.button} type="button" onClick={onGoBack}>
    //       ⬅ Go back
    //     </button>
    //     <h3 className={s.title}>{original_title || original_name}</h3>
    //     <span className={s.releaseData}>{release_date.slice(0, 4)}</span>
    //     <img
    //       className={s.image}
    //       src={
    //         poster_path
    //           ? `https://image.tmdb.org/t/p/w500${poster_path}`
    //           : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
    //       }
    //       alt={original_title}
    //     />
    //     <div className={s.contentWrap}>
    //       <div>
    //         <span className={s.score}>User Score : </span>
    //         <span className={s.scoreValue}> {vote_average * 10} %</span>
    //         <h4 className={s.subtitle}>Overview</h4>
    //         <p className={s.description}>{overview}</p>
    //         <h4 className={s.subtitle}>Genres</h4>
    //         <hr />
    //         <p className={s.genreValues}>
    //           {genres.map(genre => genre.name).join(' | ')}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <Link className={s.link} to={`${url}/cast`}>
    //     Cast
    //   </Link>

    //   <Link className={s.link} to={`${url}/reviews`}>
    //     Reviews
    //   </Link>

    //   <Switch>
    //     <Route path={`${path}/:movieId`}>
    //       <Cast movieId={movieId} />
    //     </Route>

    //     <Route></Route>
    //     {/* <Route
    //       path={`${url}/cast`}
    //       component={props => <Cast {...props} movieId={movieId} />}
    //     /> */}
    //     {/* <Route
    //       path={`${url}/reviews`}
    //       component={props => <Reviews {...props} movieId={movieId} />}
    //     /> */}
    //   </Switch>
    // </>
  );
};

export default MovieDetailsPage;
