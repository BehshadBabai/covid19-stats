import React from "react";
import data from "../../api/data";

export default function SearchContriesPage () {
  const countries = data.getAllCountries();
  return (
    <section id="search-countries">
      <p>
        SEARCH COUNTRIES
      </p>
    </section>
  );
}