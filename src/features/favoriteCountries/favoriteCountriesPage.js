import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteCountries } from "./favoriteCountriesSlice";
import "./favoritepage.css";
import { putCommas } from "../../utils/utils";

export default function FavoriteContriesPage() {
  const favoriteCountries = useSelector(selectFavoriteCountries);
  return (
    <>
      <section id="favorite-countries-large">
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
                  <td>{putCommas(country.country)}</td>
                  <td>{putCommas(country.confirmed)}</td>
                  <td>{putCommas(country.critical)}</td>
                  <td>{putCommas(country.deaths)}</td>
                  <td>{putCommas(country.recovered)}</td>
                  <td>{putCommas(country.latitude)}</td>
                  <td>{putCommas(country.longitude)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section id="favorite-countries-small">
        {favoriteCountries.length<=0 && <p id="no-favorites">You have no favorites yet!</p>}
        {favoriteCountries.length > 0 && favoriteCountries.map((country) => {
          return (
            <details key={country.code}>
              <summary>{country.country}</summary>
              <p>
                Confirmed: {putCommas(country.confirmed)}
              </p>
              <p>
                Critical: {putCommas(country.critical)}
              </p>
              <p>
                Deceased: {putCommas(country.deaths)}
              </p>
              <p>
                Recovered: {putCommas(country.recovered)}
              </p>
              <p>
                Latitude: {putCommas(country.latitude)}
              </p>
              <p>
                Longitude: {putCommas(country.longitude)}
              </p>
            </details>
          );
        })}
      </section>
    </>
  );
}
