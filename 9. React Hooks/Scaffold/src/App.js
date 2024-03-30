import "./styles.css";
import useFetch from "./useFetch";
import {useState} from "react"
// import the custom hook to use in this document
export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  // Use the custom hook here
  const { data, loading, error, getJoke } = useFetch(url);
  // Display loading text here
  if (loading) {
    return <div className="App">Loading...</div>;
  }

  // Display something went wrong here
  if (error) {
    return <div className="App">Something went wrong: {error.message}</div>;
  }
  
  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {/* Do not modify the below code */}
      <h2>{data.joke}</h2>
      <button className="btn" onClick={getJoke}>New Joke</button>
    </div>
  );
}
