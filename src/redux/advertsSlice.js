import { createSlice } from '@reduxjs/toolkit';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        ad => ad.id !== action.payload.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = advertsSlice.actions;
export default advertsSlice.reducer;
