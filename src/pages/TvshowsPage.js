import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovies} from '../api/tmdb-api'
import {getTvshows} from '../api/tmdb-api'

import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'


const TvshowsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getTvshows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvshows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = tvshows.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title="Discover Tv Shows"
      movies={tvshows}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />    
  );
};

export default TvshowsPage;