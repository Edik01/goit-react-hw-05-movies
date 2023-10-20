// import { Cast } from './Cast/Cast';
// import { MovieDetails } from 'pages/MovieDetails';
import { Header } from './Header/Header';
import { HomePages } from 'pages/HomePages';
import { lazy } from 'react';
// import { MoviesPages } from 'pages/MoviePages';
import { Route, Routes } from 'react-router-dom';
// import { Reviews } from './Reviews/Reviews';
const Cast = lazy(() => import('./Cast/Cast'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const MoviesPages = lazy(() => import('../pages/MoviePages'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePages />} />
          <Route path="/movies" element={<MoviesPages />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
