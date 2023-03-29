import { createSlice } from '@reduxjs/toolkit'

const animeSlice = createSlice({
   name: 'anime',
   initialState: {
      listOfAnimes: [],
      snackBar: false,
   },
   reducers: {
      addAnimeToList(state, action) {
         state.snackBar = true
         state.listOfAnimes.push(action.payload)
      },
      removeAnimeToList(state, action) {
         console.log(action.payload)
         state.listOfAnimes = state.listOfAnimes.filter(
            anime => action.payload !== anime.mal_id
         )
      },
      deleteAllAnimeList(state, action) {
         state.listOfAnimes = []
      },
      loadAnimesLocalStorage(state, action) {
         if (Array(action.payload) && action.payload.length >= 1) {
            state.listOfAnimes = action.payload
         }
      },
      editAnimeStatus(state, action) {
         console.log(action.payload)
         state.listOfAnimes = state.listOfAnimes.map(anime => {
            if (anime.mal_id === action.payload.id) {
               return {
                  ...anime,
                  userStatus: action.payload.status,
               }
            }
            return anime
         })
      },
   },
})

export const {
   addAnimeToList,
   removeAnimeToList,
   loadAnimesLocalStorage,
   deleteAllAnimeList,
   editAnimeStatus,
} = animeSlice.actions
export const animeReducer = animeSlice.reducer
