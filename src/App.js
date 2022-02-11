import "./App.css";
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import FavoriteContriesPage from "./features/favoriteCountries/favoriteCountriesPage";
import SearchContriesPage from "./features/searchCountries/searchCountriesPage";
import Error from "./features/error/errorPage";

function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" activeclasscame="active">Search Countries</NavLink>
          <NavLink to="/favorite" activeclassname="active">Favorite Countries</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<SearchContriesPage />} />
          <Route path="/favorite" element={<FavoriteContriesPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <footer>&copy; Behshad Babai 2022</footer>
    </>
  );
}

export default App;
