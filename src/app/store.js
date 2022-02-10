import { configureStore } from '@reduxjs/toolkit';
import favoriteCountriesReducer from '../features/favoriteCountries/favoriteCountriesSlice'; 

export const store = configureStore({
  reducer: {
    favoriteCountries: favoriteCountriesReducer
  },
});
