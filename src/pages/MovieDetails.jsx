import { useEffect, useState } from "react"; //HOOK
import { useParams } from "react-router-dom"; // HOOK
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";




export function MovieDetails() {
  const { movieId } = useParams(); //recupera path="/movies/:movieId"
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);
  const imageUrl = getMovieImg(movie.poster_path,500)
  return (
    <div>
      <img src={imageUrl} alt="{movie.title}"/>
      <div>
        <p>
          <strong>Title. </strong>{movie.title}
        </p>
      </div>
    </div>
  );
}









