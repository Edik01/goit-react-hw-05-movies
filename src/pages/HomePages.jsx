import { MovieList } from 'components/MovieList/MovieList';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTrendingMovies } from 'service/themoviedbAPI';
export const HomePages = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const results = await fetchTrendingMovies();
      setMovies(results);
    };

    fetchMovies();
  }, []);
  return (
    <>
      <h2>Trending Film</h2>
      <MovieList movies={movies} />
    </>
  );
};
