import { useState, useEffect, useRef } from 'react';
import { fetchQueryMovies } from 'services/api';
import * as storage from 'services/localStorage';
import s from './MoviePage.module.css';
import MovieList from 'components/MovieList/MovieList';
import 'react-toastify/dist/ReactToastify.css';

const STORAGE_KEY = 'movies';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  //сохранить в localStorage иначе срабатывала на onCange (Таня - комент к дз)
  const [savedQuery, setsavedQuery] = useState(storage.get(STORAGE_KEY) ?? '');

  const inputRef = useRef(null); //!фокус
  useEffect(() => {
    inputRef.current.focus(); //!фокус
  }, []);
  // console.log(inputRef);

  useEffect(() => {
    storage.save(STORAGE_KEY, savedQuery);
    setQuery(savedQuery); // сохраняет в поле  input последний поиск пользователя(Таня - комент к дз)

    if (savedQuery === '') {
      return;
    }

    fetchQueryMovies(savedQuery).then(setMovies);
    //если нужно очистить cписок фильмов который искал пользователь
    // return () => {
    //   storage.remove(STORAGE_KEY);
    // };
  }, [savedQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    setsavedQuery(query); //при сабмите записалось в состояние значение введенное user
  };

  return (
    <>
      <div className={s.wrap}>
        <form onSubmit={handleSubmit}>
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
      </div>
      <MovieList movies={movies} />
    </>
  );
};

export default MoviePage;
