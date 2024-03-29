import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery, readQuery  } from 'react-query'
import Spinner from '../components/spinner'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToPlaylist from '../components/cardIcons/addtoPlaylist'

const UpcomingMoviesPage = (props) => {
 const {  data, error, isLoading, isError }  = useQuery('discover', getUpcomingMovies)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) { 
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
      
 const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))


  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
     action={(movie) => {
        return <AddToPlaylist movie={movie} /> 
      }}
    />
  );
};


export default UpcomingMoviesPage; 

