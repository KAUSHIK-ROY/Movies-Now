import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCertifications = () => {
  const [certifications, setCertifications] = useState({ movie: {}, tv: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {        
        // Endpoints for movie and TV certifications
        const movieCertificationsURL = "https://api.themoviedb.org/3/certification/movie/list";
        const tvCertificationsURL = "https://api.themoviedb.org/3/certification/tv/list";
        
        // Fetch certifications data
        const [movieResponse, tvResponse] = await Promise.all([
          axios.get(movieCertificationsURL),
          axios.get(tvCertificationsURL),
        ]);

        // Combine movie and TV certifications
        const combinedCertifications = {
          movie: movieResponse.data.certifications,
          tv: tvResponse.data.certifications,
        };

        setCertifications(combinedCertifications);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  // Function to get certification name by type (movie or tv), country code, and code
  const getCertificationName = (type, countryCode, code) => {
    const certs = certifications[type]?.[countryCode] || [];
    const certification = certs.find((c) => c.certification === code);
    return certification ? certification.certification : code;
  };

  return { certifications, getCertificationName, loading, error };
};

export default useFetchCertifications;
