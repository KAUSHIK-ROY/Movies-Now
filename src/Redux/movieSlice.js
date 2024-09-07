import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bannerData: [],
  imageURL : "",
  genre : []
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setBannerData : (state, action) =>{
        state.bannerData = action.payload
    },
    setImageURL : (state, action) =>{
        state.imageURL = action.payload
    },
    setGenre : (state,action) =>{
      state.genre = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setBannerData, setImageURL, setGenre } = movieSlice.actions

export default movieSlice.reducer