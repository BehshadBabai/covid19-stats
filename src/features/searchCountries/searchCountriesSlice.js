import { createSlice } from "@reduxjs/toolkit"; 

const searchCountry = createSlice(
  {
    initialState: {
      searchedCountry: {

      },
      isFavorite: false
    },
    name: 'searchCountries',
    reducers: {
      addSearchedCountry: (state,action) => {
        state.searchedCountry = {
          ...state.searchedCountry,
          code: action.payload.code,
          confirmed: action.payload.confirmed,
          country: action.payload.country,
          critical: action.payload.critical,
          deaths: action.payload.deaths,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
          recovered: action.payload.recovered,
          isFavorite: state.isFavorite
        }
      },
      setIsFavorite: (state,action) => {
        state.isFavorite = action.payload;
      }
    }
  }
);

export const selectSearchCountry = (state) => state.searchCountry;
export default searchCountry.reducer;
export const {addSearchedCountry,setIsFavorite} = searchCountry.actions;