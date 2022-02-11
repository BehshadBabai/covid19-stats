import React from "react";
import { useDispatch } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../features/favoriteCountries/favoriteCountriesSlice";
import { setIsFavorite } from "../features/searchCountries/searchCountriesSlice";

export default function Country(props) {
  const dispatch = useDispatch();

  const putCommas = (str) => {
    if(typeof str !== 'string')
      return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    else 
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handleClick = (e) => {
    if (props.isFavorite) {
      dispatch(
        removeFavorite({
          code: props.code,
        })
      );
      dispatch(setIsFavorite(false));
      e.target.src = require("../img/black-heart.png");
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
        })
      );
      dispatch(setIsFavorite(true));
      e.target.src = require("../img/red-heart.png");
    }
  };
  return (
    <div id="country-preview">
      <div id="intro">
        <img src="flag" alt="flag" id="flag" />
        <h2>{props.country}</h2>
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
      <div id="stats">
        <div id="confirmed">
        <h3>Confirmed: </h3>
        <p>{putCommas(props.confirmed)}</p>
        </div>
        <div id="critical">
        <h3>Critical: </h3>
        <p>{putCommas(props.critical)}</p>
        </div>
        <div id="deaths">
        <h3>Deceased: </h3>
        <p>{putCommas(props.deaths)}</p>
        </div>
        <div id="recovered">
        <h3>Recovered: </h3>
        <p>{putCommas(props.recovered)}</p>
        </div>
        <div id="latitude">
        <h3>Latitude: </h3>
        <p>{props.latitude}</p>
        </div>
        <div id="longitude">
        <h3>Longitude: </h3>
        <p>{props.longitude}</p>
        </div>
      </div>
    </div>
  );
}
