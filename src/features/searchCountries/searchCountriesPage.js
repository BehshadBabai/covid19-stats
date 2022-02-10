import React from "react";
import data from "../../api/data";

export default function SearchContriesPage() {
  data.search('iran');
  return (
    <>
      <section id="popular">
        <h2>Most Popular</h2>
        {
          data.popular.map(
            (item) => {
              return <div id="popular" key={item.name}><img src={item.src}/><p>{item.name}</p></div>
            }
          )
        }
      </section>
      <section id="search-countries">
        <h1>Search Countries</h1>
        <form>
          <input type="text"></input>
        </form>
      </section>
    </>
  );
}
