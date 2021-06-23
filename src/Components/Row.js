import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  console.log(fetchUrl);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 }
  };
  return (
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
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onDragStart={handleDragStart}
              />
              <Link to={`${movie.id}`}></Link>
            </>
          ))}
        </div>
      </AliceCarousel>
    </div>
  );
}

export default Row;
