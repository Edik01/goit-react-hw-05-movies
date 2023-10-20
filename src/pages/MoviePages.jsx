import { fetchMovieByName } from 'service/themoviedbAPI';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';

const MoviesPages = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) return;
    const fetchMovies = async () => {
      const results = await fetchMovieByName(searchQuery);
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
export default MoviesPages;
