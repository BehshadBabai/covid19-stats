import React from "react";
import data from "../../api/data";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFavoriteCountries } from "../favoriteCountries/favoriteCountriesSlice";

export default function SearchContriesPage() {
  const favoriteCountries = useSelector(selectFavoriteCountries);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    data.search(searchTerm).then((result)=>{
      const found = favoriteCountries.some((el)=>{
        return el.country === result[0].country;
      });
      if(found){
        result[0] = {
          ...result[0],
          isFavorite: true
        }
      }else{
        result[0] = {
          ...result[0],
          isFavorite: false
        }
      }
      //show what you found or didn't find

    });  //result[0] is the object
  };
  return (
    <>
      <section id="popular">
        <h2>Most Popular</h2>
        {data.popular.map((item) => {
          return (
            <div id="popular" key={item.name}>
              <img src={item.src} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </section>
      <section id="search-countries">
        <h1>Search Countries</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange}></input>
          <button type="submit">
            <img src="a" />
          </button>
        </form>
      </section>
      <section id="search-result">
      </section>
    </>
  );
}
