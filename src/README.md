# Assignment - ReactJS app.

Name: TJ FITZPATRICK
Number: 20027865

## Overview.

The purpose of this modle is to learn React through the development of a Movies application. 
We had built a standard movie app in our labs, the assignment was then given to us to finish it off. 
The characteristics of my submission include Reused / Repurposed component structure, UI style, and behaviour of the origional Movies fan application. 
the properties included: UI - Dynamic and interactive;
                          Routing - paramaterised URL.
						  Datamodel with 2 entity types. 9I actually have more than just 2 endpoints)
						  I have no storey book support submitted for grading. 
						  I do have proof though that I am able to research and search and learn myself as I learned to smaller appplications through tutorials online. 
						  https://www.freecodecamp.org/news/react-movie-app-tutorial/
						  https://dev.to/tkbraincodes/building-a-react-movie-application-2f55
						  https://reactjsexample.com/tag/movies/


...... The I am submitting has the following features... 
 
 + Feature 1 : These are simple API changes, and they allow me to new pages 'Upcoming Movies', 'Now in Theatres', 'Top Rated Movies', 'Popular Movies' all I change in the api is a key word for example 'Popular' to 'latest'.
 + Feature 2 : This feature is where I brought in the Tv shows, I had to create 6 copies of movies cards, and change key words in them to reflect tv shows, so for example we have a tv card that calls an tv 'show name', rather than a movie 'title'.
 + Feature 3 : This feature is going to be a trending persons feature, its a simple APi that calls for the top 2- trending peiople, I jsut display them in a table, their image and what they are trending for. 
 + Feature 4 : This is the movies with video page, the first feature is the carousel, it jsut displays the Top movies images, and loops over them, at the time of writing this I have it set to 8. 
 was amazed and suprised how smple it was to impliment, I was goign to  try impliment it in the tv shows also but jsut had to be mindful of time. 
  + Feature 5 : This is brillent, I love the way how simple it is usign a reaact player, and playing youtube videos, this is a paramaeterised Url that is passed the movies ID and the query is sent to the tmdb discover video database. 

## Setup requirements.

You need an api key for font awsome, and put this in you css file for reference. 


## API Data Model.

..... [For non-Movies Fan app] Insert a diagram of the API's data model (see example below) AND/OR a sample(s) of the JSON documents returned by its endpoints ........

![][model]

......[For the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........
getMovies
getlatestMovies
getTopRatedMovies
getPopularTV
getMovie
getGenres
getMovieImages
getTvImages
getMovieCredits
getUpcomingMovies
getMovieReviews
getTvReviews
nowPlayingMovies
fetchGenre
fetchMovieByGenre
fetchMovieDetail
fetchMovieVideos
fetchCasts
fetchSimilarMovie
fetchPersons

The tv show api returning data:
https://user-images.githubusercontent.com/49097329/130524845-13b2e90a-1b30-4de3-9242-fd2876273854.png




## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

+ GET  <Route exact path="/movies/popular" component={PopularMoviesPage} />
+ GET  <Route exact path="/tv/popular" component={PopulartvPage} />
+ GET <Route exact path="/movies/toprated" component={TopratedMoviesPage} />
+ GET   <Route exact path="/movies/latest" component={LatestMoviesPage} />
+ GET  <Route path="/tv/:id" component={TvPage} />
+ GET <Route path="/video/:id" component={PlayervideoPage} />
+ GET  <Route path="/movie/video" component={MovieVideoPage} />>
+ GET <Route path="/trendingpersons" component={Trendingpersonspage} />

## Independent learning (If relevant).

Independat learning was shown on the 'Movies with video page' and 'trending persons page' 
Movie with video page: https://user-images.githubusercontent.com/49097329/130523795-ae276cf9-4dee-46e7-a9ba-1032a4d651b8.png
Video player: https://user-images.githubusercontent.com/49097329/130523856-011bde5c-49f3-4d97-a10a-3b8c06ae55ac.png



I used tutorials to teach mypleasf about the player,, the carousel, the javascrt on click function I knew already, i just applied it to this. 
 


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png