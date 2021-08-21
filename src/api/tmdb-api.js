import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const topratedUrl = `${url}/movie/top_rated`;
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
    'https://api.themoviedb.org/3/movie/latest?api_key=e78ce8d6f8fd74b6fcf1433d7b690ec1&language=en-US&include_adult=false&page=1'
    
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
   // 'https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1'
    'https://api.themoviedb.org/3/tv/popular?api_key=e78ce8d6f8fd74b6fcf1433d7b690ec1&language=en-US&page=1&include_adult=false&page=1'

  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getPopularMovies = async () => {
  const response = await fetch(
   // 'https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1'
    'https://api.themoviedb.org/3/movie/popular?api_key=e78ce8d6f8fd74b6fcf1433d7b690ec1&language=en-US&include_adult=false&page=1'

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
    // eslint-disable-next-line no-unused-vars
    const [prefix, { id }] = queryKey;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
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
     //  'https://api.themoviedb.org/3/movie/550988/credits?api_key=e78ce8d6f8fd74b6fcf1433d7b690ec1'
      'https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}'
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

    export const nowPlayingMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_videofalse&page=1`
      );
  if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  };

