import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovies} from '../api/tmdb-api'
import {getMovieCredits} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'


const HomePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
 
  return (
    <h1 > this is supposed to be a movie credit page </h1>
    //<PageTemplate
      //title= 'Credits Page'
     // movies={credits}
      //action={(movie) => {
      //  return <AddToFavoritesIcon movie={movie} />
      //}}
    ///>    
  );
};

export default HomePage;