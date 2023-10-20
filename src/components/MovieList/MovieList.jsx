import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
