import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
    };
  }

  // Use the required lifecycle methods here
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          photos: data,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  render() {
    // Display loading status here
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div className="App">
        {this.state.photos.map((photo) => {
          return <Image key={photo.id} photo={photo} />;
        })}
      </div>
    );
  }
}
