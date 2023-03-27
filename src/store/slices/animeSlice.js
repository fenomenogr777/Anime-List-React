import { createSlice } from '@reduxjs/toolkit'

const animeSlice = createSlice({
   name: 'anime',
   initialState: {
      listOfAnimes: [],
   },
   reducers: {
      addAnimeToList(state, action) {
         state.listOfAnimes.push(action.payload)
      },
      removeAnimeToList(state, action) {
         state.listOfAnimes = state.listOfAnimes.filter(
            anime => action.payload !== anime.mal_id
         )
      },
      loadAnimesLocalStorage(state, action) {
         if (Array(action.payload) && action.payload.length >= 1) {
            state.listOfAnimes = action.payload
         }
      },
   },
})

export const { addAnimeToList, removeAnimeToList, loadAnimesLocalStorage } =
   animeSlice.actions
export const animeReducer = animeSlice.reducer
