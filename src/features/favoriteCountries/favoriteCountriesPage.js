import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteCountries } from "./favoriteCountriesSlice";

export default function FavoriteContriesPage() {
  const favoriteCountries = useSelector(selectFavoriteCountries);
  return (
    <section id="favorite-countries">
      <h1>Favorite Countries</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Confirmed</th>
            <th>Critical</th>
            <th>Deceased</th>
            <th>Recovered</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {favoriteCountries.map((country) => {
            return (
              <tr key={country.code}>
                <td>{country.name}</td>
                <td>{country.confirmed}</td>
                <td>{country.critical}</td>
                <td>{country.deceased}</td>
                <td>{country.recovered}</td>
                <td>{country.latitude}</td>
                <td>{country.longitude}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
