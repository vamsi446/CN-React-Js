import { Component } from "react";
import AnimeCard from "./AnimeCard";
// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    return <div className="anime-list">

      {/* Map the anime list recieved through props and pass the details to the Animecard component*/
      this.props.anime.map((anime, index)=>(<AnimeCard key={index} anime={anime} />))
      }

    </div>;
  }
}

export default AnimeList;
