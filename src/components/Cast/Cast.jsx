import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastsByIdMovie } from 'service/themoviedbAPI';
const Cast = () => {
  const [casts, setCasts] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchCasts = async () => {
      const result = await fetchCastsByIdMovie(id);

      setCasts(result);
    };
    fetchCasts();
  }, [id]);
  return (
    <>
      {casts && (
        <ul>
          {casts.map(({ name, profile_path, id }) => {
            {
              return (
                <li key={id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                    width="80"
                  />
                  <h3>{name}</h3>
                </li>
              );
            }
          })}
        </ul>
      )}
    </>
  );
};
export default Cast;
