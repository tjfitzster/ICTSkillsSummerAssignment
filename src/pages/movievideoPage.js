import React, { useState, useEffect } from 'react';
import {fetchMovies, fetchGenre, fetchMovieByGenre, fetchPersons} from '../api/tmdb-api';
import RBCarousel from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import { Link } from "react-router-dom";

const MovieVideoPage = (props) => {

    const [nowPlaying, setNowPlaying] = useState ([]); /* Setting up state hooks */
    const [genres, setGenres]  = useState ([]);  /* Setting up state hooks */
    const [movieByGenre, setMovieByGenre] = useState([]);
    const [persons, setPersons] = useState([]);
   
    useEffect(() => {

        const fetchAPI = async () => {
            setNowPlaying(await fetchMovies()); /* Fetching Now Playing API */
            setGenres(await fetchGenre());  /* Fetching Gebres API*/
            setPersons(await fetchPersons());
            setMovieByGenre(await fetchMovieByGenre());
        };
        
         fetchAPI();
    }, []);

    const handleGenreClick = async (genre_id) => {
        setMovieByGenre(await fetchMovieByGenre(genre_id));
      };

    const movies = nowPlaying.slice(0,10).map((item, index) => {

        return(
           <div style = {{ height: "500", width: "100"}} key={index}>
                    <div className="carosel-center">
                        <img style={{height: 600, width: 1200}} src={item.backPoster} alt={item.title} />   {/* Setting the movie poster heighght and width */} 
                    </div>
                    <div className="carousel-center">
                    <i className="fas fa-play-circle" style={{fontSize: 95, color:'#f4c10f'}}> {/* Setting UP The Play Button*/}
                     </i> 
                    </div>
                    <div className="carousel-caption" style={{textAlign:'center', fontSize: 35}}> {/* Setting the movie Test up*/}
                        {item.title}
                    </div>
            </div>
        );
    });

    const genreList = genres.map((item, index) => {
        return (
           <li className="list-inline-item" key={{index}}> 

                <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            handleGenreClick(item.id);
          }}
        >
                    {item.name}
                </button>
                </li>
        )
    });

    const movieList = movieByGenre.slice(0,8).map((item, index) => {
        return (
            <div className="col-md-3 col-se-6"key={{index}}> 
                    <div className="card">
                    <Link to={`/video/${item.id}`}>
                        <img className="img-fluid" src={item.poster} alt={item.title}></img>
                    </Link>
                    </div>
                    <div className="mt-3">
                  <p style={{ fontWeight: "bolder" }}>{item.title}</p>
                  <p>Rated: {item.rating}</p>
                </div>
            </div>      
        )
        
        });

        const trendingPersons = persons.slice(0, 15).map((item, index) => {
            return (
              <div className="col-md-3 text-center" key={index}>
                <img
                  className="img-fluid rounded-circle mx-auto d-block"
                  src={item.profileImg}
                  alt={item.name}
                ></img>
                <p className="font-weight-bold text-center">{item.name}</p>
                <p
                  className="font-weight-light text-center"
                  style={{ color: "#5a606b" }}
                >
                  Trending for {item.known}
                </p>
              </div>
            );
          });

    return(
        <div className="container"> {/* Setting the Carosel up */}
            <div className="row" mt-2>
                <div className="col"> 
                    <RBCarousel
                    autoplay={true}
                    pauseOnVisibility={true}
                    slideshowSpeed={5000}
                    version={4}
                    indicatiors={false}>
                    {movies}
                    </RBCarousel>
                </div>
            </div>
            <div className="row at 3"> 
                <div className="col"> 
                    <ul className="list-inline">
                        {genreList}
                    </ul>
                    </div>
            </div>
            <div className="row at 3"> 
                        {movieList}  
                </div>
                <div className="row at 3"> {trendingPersons} </div>
            
        </div>
        )

  };
  
  export default MovieVideoPage;