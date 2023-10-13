import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/movies">movies</Link>
          </li>
        </ul>
      </header>
      <Suspense>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
};
