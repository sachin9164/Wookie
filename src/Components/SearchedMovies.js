import React, { useState, useEffect } from "react";
import axios from "../axios";
import { useHistory } from "react-router-dom";
import "./Row.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
const baseUrl = "https://image.tmdb.org/t/p/original/";

function SearchedMovies({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  let history = useHistory();
  console.log(history);
  var q = history.location.pathname.substring(8);
  console.log(title);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/search/movie?api_key=be4cff6e2207bd4d556b6aa621ac9efa&query=${q}&page=1&include_adult=false`
      );
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const onClick = () => {
    history.replace(`/${movies.id}`);
  };
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 6 }
  };
  const move = movies.slice(10, 18);
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/logged">
        <button type="button" className="btn btn-danger">
          Return to movies
        </button>
      </Link>
      <h1>Saerched Results</h1>
      <div className="row">
        <h2>{title}</h2>

        <AliceCarousel
          mouseTracking
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          controlsStrategy="alternate"
        >
          <div className="row__posters">
            {movies.map((movie) => (
              <>
                <img
                  key={movie.id}
                  className={`row__poster ${true && "row__posterLarge"}`}
                  src={`${baseUrl}${
                    true ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                  onDragStart={handleDragStart}
                />
                <br></br>
                <Link className="link" to={`${movie.id}`}>
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={onClick}
                  >
                    {" "}
                    Watch▶️
                  </button>
                </Link>
              </>
            ))}
          </div>
        </AliceCarousel>
      </div>
      <div className="row">
        <h2>{title}</h2>

        <AliceCarousel
          mouseTracking
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          controlsStrategy="alternate"
        >
          <div className="row__posters">
            {move.map((movie) => (
              <>
                <img
                  key={movie.id}
                  className={`row__poster ${true && "row__posterLarge"}`}
                  src={`${baseUrl}${
                    true ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                  onDragStart={handleDragStart}
                />
                <br></br>
                <Link className="link" to={`${movie.id}`}>
                  <button type="button" class="btn btn-success">
                    {" "}
                    Watch▶️
                  </button>
                </Link>
              </>
            ))}
          </div>
        </AliceCarousel>
      </div>
    </>
  );
}

export default SearchedMovies;
