import { configureStore } from '@reduxjs/toolkit';
import favoriteCountriesReducer from '../features/favoriteCountries/favoriteCountriesSlice';
import searchCountryReducer from '../features/searchCountries/searchCountriesSlice'; 

export const store = configureStore({
  reducer: {
    favoriteCountries: favoriteCountriesReducer,
    searchCountry: searchCountryReducer
  },
});
