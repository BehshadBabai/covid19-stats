import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import FavoriteContriesPage from './features/favoriteCountries/favoriteCountriesPage';
import SearchContriesPage from './features/searchCountries/searchCountriesPage';
import Error from './features/error/errorPage';

function App() {
  return (
    <>
    <Link to="/">Covid19-Stats</Link>
    <nav>
      <Link to="/">Search Countries</Link>
      <Link to="/favorite">Favorite Countries</Link>
    </nav>
    <Routes>
      <Route path="/" element={<SearchContriesPage />} />
      <Route path="/favorite" element={<FavoriteContriesPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <footer>&copy; Behshad Babai 2022</footer>
    </>
  );
}

export default App;
