import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import MainPage from "./Components/MainPage";
import NotFoundPage from "./NotFoundPage";
import MovieDetail from "./Components/MovieDetail";
import SearchedMovies from "./Components/SearchedMovies";
import requests from "./requests";
import Login from "./Form";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/logged" component={MainPage} />
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
        <ToastContainer autoClose={3000} hideProgressBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
