
import {useState, useEffect} from "react"
// Complete the following hook
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const getJoke = async () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, error, getJoke };

  //It should return data returned from fetch, loading, error and getJoke
};
// export the useFetch hook as a default export
export default useFetch;
