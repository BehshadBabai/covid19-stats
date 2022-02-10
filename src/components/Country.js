import React from "react";

export default function Country(props) {
  return (
    <div id="country-preview">
    <img src="flag" alt="flag" /><h2>{props.country}</h2>
    <h3 id="confirmed">Confirmed: </h3><p>{props.confirmed}</p>
    <h3 id="critical">Critical: </h3><p>{props.critical}</p>
    <h3 id="deaths">Deceased: </h3><p>{props.deaths}</p>
    <h3 id="recovered">Recovered: </h3><p>{props.recovered}</p>
    <h3 id="latitude">Latitude: </h3><p>{props.latitude}</p>
    <h3 id="longitude">Longitude: </h3><p>{props.longitude}</p>
    {props.isFavorite && <img src={require('../img/red-heart.png')} alt="like button"/>}
    {!props.isFavorite && <img src={require('../img/black-heart.png')} alt="like button"/>}
    </div>
  )
}