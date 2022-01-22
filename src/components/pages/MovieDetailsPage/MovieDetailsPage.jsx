import { fetchMovieById } from 'services/api';
import { useState, useEffect } from 'react';
import s from './MovieDetailsPage.modulse.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});

  // useEffect(() => {
  //   const getMovie = async () => {
  //     try {
  //       const movie = await fetchMovieById(movieId);

  //       setMovie({ ...movie });
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       console.log('id page');
  //     }
  //   };
  //   getMovie();
  // }, [movieId]);

  // useEffect(() => {
  //   fetchMovieById(id)
  //     .then(setMovie)
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

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
    <div>
      {/* <button className="Button" type="button" onClick={onGoBack}>
        ⬅ Go back
      </button> */}
      <div className={s.wrap}>
        <img
          className={s.image}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
          }
          alt={original_title}
        />
        <div className={s.contentWrap}>
          <h3 className={s.title}>{original_title || original_name}</h3>
          <span className={s.releaseData}>{release_date.slice(0, 4)}</span>
          <span className={s.score}>User Score : </span>
          <span className={s.scoreValue}>{vote_average * 10} %</span>
          <h4 className={s.subtitle}>Overview</h4>
          <p className={s.description}>{overview}</p>
          <span className={s.genres}>Genres</span>
          <p className={s.genreValues}>
            {genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
