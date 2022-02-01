import { useState, useEffect, useRef } from 'react';
import { fetchQueryMovies } from 'services/api';
import * as storage from 'services/localStorage';
import s from './MoviePage.module.css';
import MovieList from 'components/MovieList/MovieList';
const STORAGE_KEY = 'movies';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [savedQuery, setsavedQuery] = useState(storage.get(STORAGE_KEY) ?? '');

  const inputRef = useRef(null); //!фокус
  useEffect(() => {
    inputRef.current.focus(); //!фокус
  }, []);

  useEffect(() => {
    storage.save(STORAGE_KEY, savedQuery);
    setQuery(savedQuery);

    if (savedQuery.trim() === '') {
      return;
    }

    fetchQueryMovies(savedQuery).then(setMovies);
  }, [savedQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setsavedQuery(query);
  };

  return (
    <>
      <div className={s.wrap}>
        <form onSubmit={handleSubmit}>
          <input
            onChange={e => setQuery(e.target.value)}
            value={query}
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Input movie name..."
            ref={inputRef}
          />
          <button type="submit" className={s.button}>
            Search
          </button>
        </form>
      </div>
      <MovieList movies={movies} />
    </>
  );
};

export default MoviePage;
