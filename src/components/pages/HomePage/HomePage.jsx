import { useState, useEffect } from 'react';
import { fetchTrandingMovies } from 'services/api';
import PageHeading from 'components/common/PageHeading/PageHeading';
import MovieList from 'components/MovieList/MovieList';

const HomeView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrandingMovies().then(response => {
      setMovies([...response]);
    });
  }, []);

  return (
    <>
      <PageHeading text="Tranding Movies" />
      <MovieList movies={movies} />
    </>
  );
};

export default HomeView;
