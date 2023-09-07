import { useEffect, useState } from "react"; //HOOK
import { useParams } from "react-router-dom"; // HOOK
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetails.css"

export function MovieDetails() {
  const { movieId } = useParams(); //recupera path="/movies/:movieId"
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      //setGenres(data.genres);
      setGenres(data.genres[1])
      //console.log(data)
      console.log(genres);
    });
  }, [movieId]);
  const imageUrl = getMovieImg(movie.poster_path, 500);
  return (
    <div className="detailsContainer">
      <img className="col movieImage" src={imageUrl} alt="{movie.title}" />
      <div className="col movieDetails">
        <p className="title">
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genre: </strong>
          {genres.name}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
