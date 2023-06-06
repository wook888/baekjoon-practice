import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(movie);
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      <div>
        <img src={movie.large_cover_image} alt={movie.title} />
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <ul>
            Genre:{" "}
            {movie.genres && movie.genres.map((genre) => <li>{genre}</li>)}
          </ul>
          <p>{movie.description_full}</p>
        </div>
      </div>
    </div>
  );
}
