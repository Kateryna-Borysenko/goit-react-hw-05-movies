import PropTypes from 'prop-types';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => (
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
          <img
            className={s.image}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
            }
            alt={original_title}
          />
          <h3 className={s.title}>
            {original_title ? original_title : original_name}
          </h3>
          <div className={s.wrap}>
            {/* в api приходит 2 разных названия */}
            {release_date && (
              <div className={s.releaseDate}>{release_date.slice(0, 4)}</div>
            )}

            {first_air_date && (
              <div className={s.releaseDate}>{first_air_date.slice(0, 4)}</div>
            )}
            <div className={s.voteAverage}>{vote_average}</div>
          </div>
        </li>
      ),
    )}
  </ul>
);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
