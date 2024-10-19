import axios from 'axios';
import './App.css';
import Layout from './Components/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData, setImageURL } from './Redux/movieSlice'

function App() {

  const dispatch = useDispatch()

  const fetchTrendingData = async() => {
    try{
      const response = await axios.get('/trending/all/week')
      dispatch(setBannerData(response.data.results))

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
  },[])

  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
