import React from "react";
import data from "../../api/data";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFavoriteCountries } from "../favoriteCountries/favoriteCountriesSlice";
import { HiOutlineSearch } from 'react-icons/hi';
import Country from "../../components/Country";
import { selectSearchCountry, setIsFavorite, addSearchedCountry } from "./searchCountriesSlice"; 
import { useDispatch } from "react-redux";

export default function SearchContriesPage() {
  const dispatch = useDispatch();
  const searchCountry = useSelector(selectSearchCountry);
  const favoriteCountries = useSelector(selectFavoriteCountries);
  const [searchTerm, setSearchTerm] = useState("");
  const [flagSrc,setFlagSrc] = useState("");
  const [displayResult, setDisplayResult] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById('search-bar').value = "";
    data
      .search(searchTerm)
      .then((result) => {
        const found = favoriteCountries.some((el) => {
          return el.country === result[0].country;
        });
        if(found){
          dispatch(setIsFavorite(true));
        }
        else{
          dispatch(setIsFavorite(false));
        }
        //show what you found or didn't find
        dispatch(addSearchedCountry(result[0]));
        data.searchFlag(searchTerm).then((result)=>{
        //insuring accuracy of flag
        let i = 0;
        for(i;i<result.length;i++){
          if(result[i].name.common.toString().toLowerCase() === searchTerm){
            break;
          }
        }
          setFlagSrc(result[i].flags.png);
        }).catch(err=>{
          setFlagSrc("");
        });
        setDisplayResult(true);
        setSearchPerformed(true);
      })
      .catch((err) => setDisplayResult(false)); //result[0] is the object
  };
  const handleClick = (e) => {
    let countryName = "";
    if (e.target.id) {
      countryName = e.target.id;
    } else {
      countryName = e.target.parentNode.id;
    }
    data.search(countryName).then((result) => {
      const found = favoriteCountries.some((el) => {
        return el.country === result[0].country;
      });
      if(found){
        dispatch(setIsFavorite(true));
      }
      else{
        dispatch(setIsFavorite(false));
      }
      //show what you found or didn't find
      dispatch(addSearchedCountry(result[0]));
      if(countryName==='usa'){
        countryName = 'united states';
      }
      data.searchFlag(countryName).then((result)=>{
        //insuring accuracy of flag
        let i = 0;
        for(i;i<result.length;i++){
          if(result[i].name.common.toString().toLowerCase() === countryName){
            break;
          }
        }
        setFlagSrc(result[i].flags.png);
      }).catch(err=>{
        setFlagSrc("");
      });
      setSearchPerformed(true);
      setDisplayResult(true);
    });
  };
  return (
    <>
      <section id="popular">
        <h2>Most Popular</h2>
        <div id="countries">
          {data.popular.map((item) => {
            return (
              <div id={item.name} className="country-circle" key={item.name} onClick={handleClick}>
                <img src={require(`../../img/${item.name}.png`)} alt={item.name}/>
                {/*<p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>*/}
              </div>
            );
          })}
        </div>
      </section>
      <section id="search-countries">
        <h1>Search Countries</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" id="search-bar" onChange={handleChange} placeholder="Search for a country..."></input>
          <button type="submit">
          <HiOutlineSearch />
          </button>
        </form>
      </section>
      <section id="search-result">
        {displayResult && (
          <Country
            country={searchCountry.searchedCountry.country}
            confirmed={searchCountry.searchedCountry.confirmed}
            critical={searchCountry.searchedCountry.critical}
            deaths={searchCountry.searchedCountry.deaths}
            recovered={searchCountry.searchedCountry.recovered}
            latitude={searchCountry.searchedCountry.latitude}
            longitude={searchCountry.searchedCountry.longitude}
            isFavorite={searchCountry.isFavorite}
            code={searchCountry.searchedCountry.code}
            flagSrc = {flagSrc}
          />
        )}
        {searchPerformed && !displayResult && (
          <p id="not-found">
            No country was found based on your search term. Please try another
            term to see a country!
          </p>
        )}
      </section>
    </>
  );
}
