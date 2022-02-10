import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../features/favoriteCountries/favoriteCountriesSlice";

export default function Country(props) {
  const dispatch = useDispatch();
  const [isFavorite,setIsFavorite] = useState(props.isFavorite);
  const handleClick = (e) => {
    if (isFavorite) {
      dispatch(
        removeFavorite({
          code: props.code
        })
      );
      e.target.src=require("../img/black-heart.png");
    } else {
      dispatch(
        addFavorite({
          country: props.country,
          code: props.code,
          confirmed: props.confirmed,
          critical: props.critical,
          deaths: props.deaths,
          recovered: props.recovered,
          latitude: props.latitude,
          longitude: props.longitude,
      }));
      e.target.src=require("../img/red-heart.png");
    }
    setIsFavorite(!isFavorite);
  };
  return (
    <div id="country-preview">
      <img src="flag" alt="flag" />
      <h2>{props.country}</h2>
      <h3 id="confirmed">Confirmed: </h3>
      <p>{props.confirmed}</p>
      <h3 id="critical">Critical: </h3>
      <p>{props.critical}</p>
      <h3 id="deaths">Deceased: </h3>
      <p>{props.deaths}</p>
      <h3 id="recovered">Recovered: </h3>
      <p>{props.recovered}</p>
      <h3 id="latitude">Latitude: </h3>
      <p>{props.latitude}</p>
      <h3 id="longitude">Longitude: </h3>
      <p>{props.longitude}</p>
      {props.isFavorite && (
        <img
          src={require("../img/red-heart.png")}
          alt="like button"
          onClick={handleClick}
        />
      )}
      {!props.isFavorite && (
        <img
          src={require("../img/black-heart.png")}
          alt="like button"
          onClick={handleClick}
        />
      )}
    </div>
  );
}
