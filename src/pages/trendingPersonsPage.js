import React, { useState, useEffect } from 'react';
import {fetchPersons} from '../api/tmdb-api';

const MovieVideoPage = (props) => {

  
    const [persons, setPersons] = useState([]);
   
    useEffect(() => {

        const fetchAPI = async () => {
            setPersons(await fetchPersons());
        };
        
         fetchAPI();
    }, []);

  
        const trendingPersons = persons.slice(0, 20).map((item, index) => {
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
        <div className="container"> 
                <hr></hr>
                <h3> Trending persons </h3>
                <div className="row at 3"> {trendingPersons} </div>
            
        </div>
        )
  };
  
  export default MovieVideoPage;