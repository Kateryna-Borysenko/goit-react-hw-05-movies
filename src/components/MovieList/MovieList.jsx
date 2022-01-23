import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useRouteMatch } from 'react-router-dom';
import s from './MovieList.module.css';
import image from 'images/image-not-found-vertical.png';

const MovieList = ({ movies }) => {
  // const { url } = useRouteMatch();
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
            {/* <Link className={s.link} to={`/movies${url}/${id}`}> */}
            <Link className={s.link} to={`/movies/${id}`}>
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
                {/* в api приходит 2 разных названия */}
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
