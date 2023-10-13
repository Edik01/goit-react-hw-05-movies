import axios from 'axios';
const API_KEY = '7a1a96151b65b7a2369b7dfff5707ea0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;
export const fetchTrendingMovies = async () => {
  const {
    data: { results },
  } = await axios(`/trending/movie/day?language=en-US&api_key=${API_KEY}`);
  return results;
};
export const fetchMovieByName = async name => {
  const {
    data: { results },
  } = await axios(
    `/search/movie?language=en-US&api_key=${API_KEY}&query=${name}`
  );
  return results;
};
