import React, { useState, useEffect } from "react";
import axios from "../axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const baseUrl = "https://image.tmdb.org/t/p/original/";
const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  let history = useHistory();
  const q = history.location.pathname.slice(1);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/movie/${q}?api_key=be4cff6e2207bd4d556b6aa621ac9efa&language=en-US`
      );

      setMovie(request.data);
      return request;
    }
    fetchData();
  }, [q]);

  //console.log(movie.genres);
  return (
    <div class="container">
      {" "}
      <br></br>
      <br></br>
      <Link to="/">
        <button type="button" class="btn btn-danger">
          Return to movies
        </button>
      </Link>
      <br></br>
      <br></br>
      <div class="row">
        <div class="col">
          <img
            src={`${baseUrl}${movie.poster_path}`}
            width="400px"
            class="rounded float-left"
            alt="..."
          ></img>
        </div>
        <div class="col">
          {" "}
          <h2>Title : {movie.original_title}</h2>
          <h2>Revenue :{movie.budget} </h2>
          <h4>Thriller</h4>
          <h4>Rating:8.1</h4>
          <h2>Runtime:{movie.runtime} min</h2>
          <h2>Budget : {movie.budget}</h2>
          <p>{movie.overview} </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default MovieDetail;
