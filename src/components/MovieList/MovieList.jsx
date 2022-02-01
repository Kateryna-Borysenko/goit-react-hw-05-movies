import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';
import image from 'images/image-not-found-vertical.png';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map(
        ({
          id,
          poster_path,
          original_title,
          release_date,
          vote_average,
          original_name,
          first_air_date,
        }) => (
          <li key={id} className={s.item}>
            <Link
              className={s.link}
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              <img
                className={s.image}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                    : image
                }
                alt={original_title}
              />
              <h3 className={s.title}>
                {original_title ? original_title : original_name}
              </h3>
              <div className={s.wrap}>
                {release_date && (
                  <div className={s.releaseDate}>
                    {release_date.slice(0, 4)}
                  </div>
                )}

                {first_air_date && (
                  <div className={s.releaseDate}>
                    {first_air_date.slice(0, 4)}
                  </div>
                )}
                <div className={s.voteAverage}>{vote_average}</div>
              </div>
            </Link>
          </li>
        ),
      )}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
