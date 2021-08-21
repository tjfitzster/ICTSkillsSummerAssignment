import React from "react";
import TVPageTemplate from "../components/templateTvListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getPopularTV} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const PopularTvPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getPopularTV)

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
    <TVPageTemplate
      title="Popular TV Shows"
      movies={tvshows}
      action={(movie) => {
        return <AddToFavoritesIcon movie={tvshows} />
      }}
    />    
  );
};

export default PopularTvPage;