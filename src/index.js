import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/homepage";
import MoviePage from "./pages/movieDetailsPage";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; 
import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import upcomingMoviesPage from "./pages/upcomingMoviesPage"; 

const App = () => {
  return (
    <BrowserRouter>
    <SiteHeader />      {/* New Header  */}
    <Switch>
      <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
      <Route exact path="/movies/upcoming" component={upcomingMoviesPage} />
      <Route path="/movies/:id" component={MoviePage} />
      <Route exact path="/" component={HomePage} />
      <Route path="/reviews/:id" component={MovieReviewPage} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));