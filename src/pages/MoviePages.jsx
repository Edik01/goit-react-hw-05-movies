import { fetchMovieByName } from 'service/themoviedbAPI';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';

export const MoviesPages = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const fetchMovies = async () => {
      const results = await fetchMovieByName(searchParams.get('query'));
      setMovies(results);
    };
    fetchMovies();
  }, [searchParams]);

  return (
    <>
      <SearchForm></SearchForm>
      <MovieList movies={movies} />
    </>
  );
};
