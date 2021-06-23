import React from "react";

import "./MainPage.css";
import Row from "./Row";
import requests from "../requests";
import Banner from "./Banner";
import Nav from "./Nav";

function MainPage() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="WOOKIE ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} isLargeRow />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} isLargeRow />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} isLargeRow />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} isLargeRow />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
}

export default MainPage;
