import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import FavoriteContriesPage from './features/favoriteCountries/favoriteCountriesPage';
import AllContriesPage from './features/allCountries/allCountriesPage';
import Error from './features/error/errorPage';

function App() {
  return (
    <>
    <Link to="/">Covid19-Stats</Link>
    <nav>
      <Link to="/">All Countries</Link>
      <Link to="/favorite">Favorite Countries</Link>
    </nav>
    <Routes>
      <Route path="/" element={<AllContriesPage />} />
      <Route path="/favorite" element={<FavoriteContriesPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <footer>&copy; Behshad Babai 2022</footer>
    </>
  );
}

export default App;
