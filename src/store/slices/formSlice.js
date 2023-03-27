import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
   name: 'form',
   initialState: {
      query: '',
      search: {
         name: '',
         type: '',
      },
   },
   reducers: {
      getQuery(state, action) {
         state.query = action.payload
      },
      getSearchName(state, action) {
         console.log(action.payload)
         state.search.name = action.payload
      },
   },
})

export const { getQuery, getSearchName } = formSlice.actions
export const formReducer = formSlice.reducer
