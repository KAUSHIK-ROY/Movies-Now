import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bannerData: [],
  imageURL : "",
  watchList: []
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
    setWatchList: (state, action)=>{
      state.watchList = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setBannerData, setImageURL, setWatchList } = movieSlice.actions

export default movieSlice.reducer