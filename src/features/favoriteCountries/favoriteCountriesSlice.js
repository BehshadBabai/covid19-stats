import { createSlice } from "@reduxjs/toolkit";
const favoriteCountries = createSlice(
  {
    reducers: {
      addFavorite: (state,action) => {
        //{name,code,confirmed,critical,Deceased,recovered,latitude,longitude}
        state.push(action.payload);
      },
      removeFavorite: (state,action) => {
        state.filter(country=>country.name!==action.payload.name);
      }
    },
    initialState: [],
    name: 'favoriteCountries'
  }
);
export const selectFavoriteCountries = (state) => state.favoriteCountries;
export default favoriteCountries.reducer;
export const {addFavorite,removeFavorite} = favoriteCountries.actions;