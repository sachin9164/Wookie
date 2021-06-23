import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import MainPage from "./Components/MainPage";
import NotFoundPage from "./NotFoundPage";
import MovieDetail from "./Components/MovieDetail";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/:movieId" component={MovieDetail} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
