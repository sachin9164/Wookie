import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import MainPage from "./Components/MainPage";
import NotFoundPage from "./NotFoundPage";
import MovieDetail from "./Components/MovieDetail";
import SearchedMovies from "./Components/SearchedMovies";
import requests from "./requests";

function App() {
  console.log(requests.fetchSearch);
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route
            title="Searched Results"
            fetchUrl={requests.fetchSearch}
            isLargeRow
            path="/search/:q"
            component={SearchedMovies}
          />
          <Route path="/:movieId" component={MovieDetail} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
