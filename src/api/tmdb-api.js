import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;



export const getMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getlatestMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};


export const getTopRatedMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};


export const getPopularTV = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
   

  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getPopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`

  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
  
export const getMovie = async ( args ) => {
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getTvShow = async ( args ) => {
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
  
  export const getGenres = async () => {
    const response = await  fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };
  
  export const getMovieImages = async ({queryKey}) => {
    const [prefix, { id }] = queryKey;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };

   
  export const getTvImages = async ({queryKey}) => {
    const [prefix, { id }] = queryKey;
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };

  export const getMovieCredits = async ({queryKey}) => {
    // eslint-disable-next-line no-unused-vars
    const [prefix, { id }] = queryKey;
    const response = await fetch(
     `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };

  export const getUpcomingMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_videofalse&page=1`
    );
if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        return json.results;
      });

    };

    export const getTvReviews = (id) => {
      return fetch(
        `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
        .then((res) => res.json())
        .then((json) => {
          return json.results;
        });
  
      };

    export const nowPlayingMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_videofalse&page=1`
      );
  if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };

  export const fetchMovies = async () => {
    try {
        const { data } = await axios.get(nowPlayingUrl, {
            params: {
                api_key: `${process.env.REACT_APP_TMDB_KEY}`,
                language: 'en_US',
                page: 1
            }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}

export const fetchGenre = async () => {
  try {
      const { data } = await axios.get(genreUrl, {
          params: {
              api_key: `${process.env.REACT_APP_TMDB_KEY}`,
              language: 'en_US',
              page: 1
          }
      })
      const modifiedData = data['genres'].map((g) => ({
          id: g['id'],
          name: g['name']
      }))
      return modifiedData;
  } catch (error) { }
}


export const fetchMovieByGenre = async (genre_id) => {
  try {
      const { data } = await axios.get(moviesUrl, {
          params: {
              api_key: `${process.env.REACT_APP_TMDB_KEY}`,
              language: 'en_US',
              page: 1,
              with_genres: genre_id
          }
      })
      const posterUrl = 'https://image.tmdb.org/t/p/original/';
      const modifiedData = data['results'].map((m) => ({
          id: m['id'],
          backPoster: posterUrl + m['backdrop_path'],
          popularity: m['popularith'],
          title: m['title'],
          poster: posterUrl + m['poster_path'],
          overview: m['overview'],
          rating: m['vote_average'],
      }))

      return modifiedData;
  } catch (error) { }
}


export const fetchMovieDetail = async (id) => {
  try {
      const { data } = await axios.get(`${movieUrl}/${id}`, {
          params: {
              api_key:`${process.env.REACT_APP_TMDB_KEY}`,
              language: 'en_US'
          }
      });
      return data;
  } catch (error) { }
}

export const fetchMovieVideos = async (id) => {
  try {
      const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
          params: {
              api_key: `${process.env.REACT_APP_TMDB_KEY}`,
          }
      });
      return data['results'][0];
  } catch (error) { }
}

export const fetchCasts = async (id) => {
  try {
      const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
          params: {
              api_key: `${process.env.REACT_APP_TMDB_KEY}`,
          }
      });
      const modifiedData = data['cast'].map((c) => ({
          id: c['cast_id'],
          character: c['character'],
          name: c['name'],
          img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
      }))

      return modifiedData;
  } catch (error) { }
}

export const fetchSimilarMovie = async (id) => {
  try {
      const { data } = await axios.get(`${movieUrl}/${id}/similar`, {
          params: {
              api_key:`${process.env.REACT_APP_TMDB_KEY}`,
              language: 'en_US'
          }
      });
      const posterUrl = 'https://image.tmdb.org/t/p/original/';
      const modifiedData = data['results'].map((m) => ({
          id: m['id'],
          backPoster: posterUrl + m['backdrop_path'],
          popularity: m['popularith'],
          title: m['title'],
          poster: posterUrl + m['poster_path'],
          overview: m['overview'],
          rating: m['vote_average'],
      }))

      return modifiedData;
  } catch (error) { }
}

export const fetchPersons = async () => {
  try {
      const { data } = await axios.get(personUrl, {
          params: {
              api_key: `${process.env.REACT_APP_TMDB_KEY}`
          }
      })
      const modifiedData = data['results'].map((p) => ({
          id: p['id'],
          popularity: p['popularity'],
          name: p['name'],
          profileImg: 'https://image.tmdb.org/t/p/w200' + p['profile_path'],
          known: p['known_for_department']

      }))
      return modifiedData;
  } catch (error) { }
}

