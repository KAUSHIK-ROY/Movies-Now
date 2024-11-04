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
      const response = await axios.get('/trending/all/week',{timeout: 5000})
      dispatch(setBannerData(response.data.results))

    } catch(error) {
      console.log("Error", error)
      if (error.code === 'ECONNABORTED') {
        // If the request times out
        alert("We're experiencing difficulty accessing TMDB data due to regional restrictions. To resolve this, you can switch to a global DNS service such as Google DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1). This should allow uninterrupted access to our content.");
      } else {
        alert(`An error occurred: ${error.message}`);
      }
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
