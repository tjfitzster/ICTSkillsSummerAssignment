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


...... The follThat I am submitting has the following features... 
 
 + Feature 1
 + Feature 2
 + Feature 3
 + etc
 + etc

## Setup requirements.

...... A brief explanation (to a third party) of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

## API Data Model.

..... [For non-Movies Fan app] Insert a diagram of the API's data model (see example below) AND/OR a sample(s) of the JSON documents returned by its endpoints ........

![][model]

......[For the Movies Fan app] Specify the additional TMDB endpoints used and show sample responses, in JSON .........

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

+ GET /blogs - displays all published blogs.
+ POST /blogs (protected) - add a new blog.
+ GET /blogs/:id - displays a particular blog.
+ GET /blogs/:id/comments (protected) - detail view of a particular blog and its comments.
+ etc.
+ etc.

## Independent learning (If relevant).

....... Briefly state any technologies/techniques used in your project codebase that was not covered in the lectures/labs. Provide source code filename (source code excerpts are not required in most cases) references to support your assertions and include references (articles/blogs) ......... 


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png