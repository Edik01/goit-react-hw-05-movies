import { Header } from './Header/Header';
import { HomePages } from 'pages/HomePages';
import { MoviesPages } from 'pages/MoviePages';
import { Route, Routes } from 'react-router-dom';
import { fetchTrendingMovies } from 'service/themoviedbAPI';
fetchTrendingMovies();
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePages />} />
          <Route path="/movies" element={<MoviesPages />} />
        </Route>
      </Routes>
    </>
  );
};
