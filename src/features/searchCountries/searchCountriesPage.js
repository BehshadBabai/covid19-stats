import React from "react";
import data from "../../api/data";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectFavoriteCountries } from "../favoriteCountries/favoriteCountriesSlice";
import Country from "../../components/Country";

export default function SearchContriesPage() {
  const favoriteCountries = useSelector(selectFavoriteCountries);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCountryObject, setCurrentCountryObject] = useState({});
  const [displayResult, setDisplayResult] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (currentCountryObject.country) {
      setDisplayResult(true);
    } else {
      setDisplayResult(false);
    }
    //make stuff here
  }, [currentCountryObject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayResult(true);
    setSearchPerformed(true);
    data.search(searchTerm).then((result) => {
      const found = favoriteCountries.some((el) => {
        return el.country === result[0].country;
      });
      if (found) {
        result[0] = {
          ...result[0],
          isFavorite: true,
        };
      } else {
        result[0] = {
          ...result[0],
          isFavorite: false,
        };
      }
      setCurrentCountryObject(result[0]);
      //show what you found or didn't find
    }).catch(err=>setDisplayResult(false)); //result[0] is the object
  };
  const handleClick = (e) => {
    setSearchPerformed(true);
    let countryName = "";
    if(e.target.id){
      countryName = e.target.id;
    }else{
      countryName = e.target.parentNode.id;
    }
    data.search(countryName).then((result) => {
      const found = favoriteCountries.some((el) => {
        return el.country === result[0].country;
      });
      if (found) {
        result[0] = {
          ...result[0],
          isFavorite: true,
        };
      } else {
        result[0] = {
          ...result[0],
          isFavorite: false,
        };
      }
      setCurrentCountryObject(result[0]);
      //show what you found or didn't find
    });
  }
  return (
    <>
      <section id="popular">
        <h2>Most Popular</h2>
        {data.popular.map((item) => {
          return (
            <div id={item.name} key={item.name} onClick={handleClick} >
              <img src={item.src} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </section>
      <section id="search-countries">
        <h1>Search Countries</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" id="search-bar" onChange={handleChange}></input>
          <button type="submit">
            <img src="a" alt="search"/>
          </button>
        </form>
      </section>
      <section id="search-result">
        {displayResult && (
          <Country
            country={currentCountryObject.country}
            confirmed={currentCountryObject.confirmed}
            critical={currentCountryObject.critical}
            deaths={currentCountryObject.deaths}
            recovered={currentCountryObject.recovered}
            latitude={currentCountryObject.latitude}
            longitude={currentCountryObject.longitude}
            isFavorite={currentCountryObject.isFavorite}
            code={currentCountryObject.code}
          />
        )}
        {searchPerformed && !displayResult && <p>No country was found based on your search term. Please try another term to see a country!</p>}
      </section>
    </>
  );
}
