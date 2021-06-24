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
    async function auth() {
      const request = await axios.get(
        `/authentication/session/new?api_key=be4cff6e2207bd4d556b6aa621ac9efa&language=en-US`
      );

      console.log(request.data);
      return request;
    }
  }, []);

  console.log(movie);
  return (
    <div class="container">
      {" "}
      <br></br>
      <br></br>
      <div className="logout">
        <Link to="/logged">
          <button type="button" className="btn btn-danger">
            Return to movies
          </button>
        </Link>
      </div>
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
          <h2>
            Title :<b>{movie.original_title}</b>
          </h2>
          <h3>Revenue :{movie.budget} </h3>
          <h5>
            <b>Populaity</b> : {movie.popularity} |<b> Average</b> :{" "}
            {movie.vote_average} |<b>Count</b> : {movie.vote_count}
          </h5>
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
