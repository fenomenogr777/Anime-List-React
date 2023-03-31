import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
   name: 'form',
   initialState: {
      query: '',
      logged: false,
      search: {
         name: '',
         score: '',
         sorted: false,
         status: '',
      },
      searchPageFilter: {
         score: '',
      },
   },
   reducers: {
      getQuery(state, action) {
         state.query = action.payload
      },
      getSearchName(state, action) {
         state.search = action.payload
      },
      getStatus(state, action) {
         state.search.status = action.payload
      },
      loginUser(state, action) {
         state.logged = action.payload
      },
      searchPageFilter(state, action) {
         console.log(action.payload)
         state.searchPageFilter.score = action.payload
      },
   },
})

export const {
   getQuery,
   getSearchName,
   getStatus,
   loginUser,
   searchPageFilter,
} = formSlice.actions
export const formReducer = formSlice.reducer
