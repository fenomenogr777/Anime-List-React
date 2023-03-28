import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
   name: 'form',
   initialState: {
      query: '',
      logged: false,
      search: {
         name: '',
         type: '',
         status: '',
      },
   },
   reducers: {
      getQuery(state, action) {
         state.query = action.payload
      },
      getSearchName(state, action) {
         state.search.name = action.payload
      },
      getStatus(state, action) {
         state.search.status = action.payload
      },
      loginUser(state, action) {
         state.logged = action.payload
      },
   },
})

export const { getQuery, getSearchName, getStatus, loginUser } =
   formSlice.actions
export const formReducer = formSlice.reducer
