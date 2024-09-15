import { useState, useEffect } from "react";
import axios from "axios";

const useFetchGenres = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const movieGenreURL = "https://api.themoviedb.org/3/genre/movie/list";
        const tvGenreURL = "https://api.themoviedb.org/3/genre/tv/list";

        // Fetch genres from both movie and TV endpoints
        const [movieResponse, tvResponse] = await Promise.all([
          axios.get(movieGenreURL),
          axios.get(tvGenreURL),
        ]);

        // Combine genres from both responses
        const combinedGenres = [
          ...movieResponse.data.genres,
          ...tvResponse.data.genres,
        ];

        setGenres(combinedGenres);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  // Helper function to map genre IDs to genre names
  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => {
        const genre = genres.find((g) => g.id === id);
        return genre ? genre.name : id;
      })
      .join(" | ");
  };

  return { genres, getGenreNames, loading, error };
};

export default useFetchGenres;
