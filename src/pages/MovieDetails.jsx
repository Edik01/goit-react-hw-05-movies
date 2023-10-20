import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'service/themoviedbAPI';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchMovie = async () => {
      const result = await fetchMovieById(id);

      setMovie(result);
    };
    fetchMovie();
  }, [id]);
  const getYear = string => string.slice(0, 4);
  const getGenres = array => array.map(({ name }) => name).join(', ');
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');
  return (
    <>
      {movie && (
        <>
          <Link to={backLink.current}>Go back</Link>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="350"
          />
          <h1>
            {movie.title}
            <span>{`(${getYear(movie.release_date)} )`}</span>
          </h1>
          <p>{`User score: ${movie.popularity}%`}</p>
          <p>{`Overview: ${movie.overview}`}</p>
          <p>{`Genres: ${getGenres(movie.genres)}`}</p>
          <p>Additional information</p>
          <Link to={'cast'}>Casts</Link>
          <Link to={'reviews'}>Reviews</Link>
          <Suspense fallback={<p>...</p>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};
export default MovieDetails;
