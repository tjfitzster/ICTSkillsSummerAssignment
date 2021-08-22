import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/homepage";
import MoviePage from "./pages/movieDetailsPage";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import './index.css';
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; 
import PopularMoviesPage from "./pages/popularMoviesPage"; 
import PopulartvPage from "./pages/popularTvPage"; 
import TopratedMoviesPage from "./pages/topratedMoviesPage"; 
import LatestMoviesPage from "./pages/latestMoviesPage"; 
import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import upcomingMoviesPage from "./pages/upcomingMoviesPage"; 
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import MovieVideoPage from './pages/movievideoPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import PlayervideoPage from './pages/videoPlayerPage';
import TvPage from "./pages/tvDetailsPage";
import Trendingpersonspage from "./pages/trendingPersonsPage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <SiteHeader />
        <MoviesContextProvider>
            {" "}
    <Switch>
      <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
      <Route exact path="/movies/popular" component={PopularMoviesPage} />
      <Route exact path="/tv/popular" component={PopulartvPage} />
      <Route exact path="/movies/toprated" component={TopratedMoviesPage} />
      <Route exact path="/movies/latest" component={LatestMoviesPage} />
      <Route exact path="/movies/upcoming" component={upcomingMoviesPage} />
      <Route path="/movies/:id" component={MoviePage} />
      <Route path="/tv/:id" component={TvPage} />
      <Route path="/video/:id" component={PlayervideoPage} />
      <Route exact path="/" component={HomePage} />
      <Route path="/reviews/:id" component={MovieReviewPage} />
      <Route path="/movie/video" component={MovieVideoPage} />
      <Route path="/trendingpersons" component={Trendingpersonspage} />
      <Route exact path="/reviews/form" component={AddMovieReviewPage} />
    
      <Redirect from="*" to="/" />
    </Switch>
    </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));