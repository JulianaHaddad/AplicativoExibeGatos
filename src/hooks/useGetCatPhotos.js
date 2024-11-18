import { useState } from "react";
import catApiService from "../services/catApiService";

export default useGetCatPhotos = () => {
  const [catsPhotos, setCatsPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCatPhotos = async () => {
    setLoading(true);
    try {
      const response = await catApiService.get();
      console.log(response);
      setCatsPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
    } catch (err) {
      setError("Houve um erro ao buscar as fotos!");
    } finally {
      setLoading(false);
    }
  };

  return { catsPhotos, loading, error, fetchCatPhotos };
};
