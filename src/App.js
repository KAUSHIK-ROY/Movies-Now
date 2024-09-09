import axios from 'axios';
import './App.css';
import Layout from './Components/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData, setGenre, setImageURL } from './Redux/movieSlice'

function App() {

  const dispatch = useDispatch()

  const fetchTrendingData = async() => {
    try{
      const response = await axios.get('/trending/all/day')
      dispatch(setBannerData(response.data.results))

    } catch(error) {
      console.log("Error", error)
    }
  }
  const fetchGenre = async() => {
    try{
      const response = await axios.get('/genre/movie/list')
      dispatch(setGenre(response.data.genres))
    } catch(error) {
      console.log("Error", error)
    }
  }


  const fetchConfiguration = async()=>{
    try{
      const response = await axios.get("/configuration")
      dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    } catch(error){
      console.log("Error", error)
    }
  }

  useEffect(()=>{
    fetchTrendingData()
    fetchConfiguration()
    fetchGenre()
  },[])
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
