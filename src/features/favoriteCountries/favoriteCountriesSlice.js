import { createSlice } from "@reduxjs/toolkit";
const favoriteCountries = createSlice(
  {
    reducers: {
      addFavorite: (state,action) => {
        //{name,code,confirmed,critical,Deceased,recovered,latitude,longitude}
        state.push(action.payload);
      },
      removeFavorite: (state,action) => {
        let index = 0;
        for(let i=0;i<state.length;i++){
          if(Object.values(state[i]).includes(action.payload.code)){
            index = i;
            break;
          }
        }
        state.splice(index,1);
      }
    },
    initialState: [],
    name: 'favoriteCountries'
  }
);
export const selectFavoriteCountries = (state) => state.favoriteCountries;
export default favoriteCountries.reducer;
export const {addFavorite,removeFavorite} = favoriteCountries.actions;