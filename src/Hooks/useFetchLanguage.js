// useFetchLanguages.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchLanguages = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/configuration/languages",
        );
        setLanguages(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);

  // Helper function to map language code to language name
  const getLanguageName = (code) => {
    const language = languages.find((lang) => lang.iso_639_1 === code);
    return language ? language.english_name : code;
  };

  return { getLanguageName, loading, error };
};

export default useFetchLanguages;
