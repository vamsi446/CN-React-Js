import {useState, useEffect} from "react"
const useLocalStorage = (key, defaultValue) => {

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : defaultValue;
  });

  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]); 

  return [data, setData];

};

export default useLocalStorage;
