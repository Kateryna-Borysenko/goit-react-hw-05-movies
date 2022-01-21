import { useState, useEffect, useRef } from 'react';
import { fetchQueryMovies } from 'services/api';
// import * as storage from 'services/localStorage';
import s from './MoviePage.module.css';
import MovieList from 'components/MovieList/MovieList';

// const STORAGE_KEY = 'movies';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        if (query === '') {
          return;
        }

        const movies = await fetchQueryMovies(query);

        setMovies([...movies]);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('можно отключить лоудер');
      }
    };
    getMovies();
  }, [query]);

  const inputRef = useRef(null); //!фокус
  useEffect(() => {
    inputRef.current.focus(); //!фокус
  });

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(query); //при сабмите записалось в состояние
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          onChange={e => setQuery(e.target.value)}
          value={query} //запрос
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Input movie name..."
          ref={inputRef} //!фокус
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </>
  );
};

export default MoviePage;
