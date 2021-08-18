
// Get all elements by ID:
const genresList = document.getElementById("genres");
const myFavoriteMovie = document.getElementById("myFavorite");
const topRatedMovies = document.getElementById("topRated");
const topRatedActionMovies = document.getElementById("topRatedAction");
const madeIn1975Movies = document.getElementById("madeIn1975");


//  Functions to get and add all genres to Dom:
const addGenresMoviesToDom = (list) => {
    list.map(genre => {
        genreItem = document.createElement("li");
        genreItem.innerText = `Movies Genre: ${genre.name}, ID: ${genre.id}`;
        genresList.appendChild(genreItem);
    });
};
getGenres().then(result => addGenresMoviesToDom(result));


//  Functions to get and add my favorite movie to Dom:
const addMyFavoriteMovieToDom = (list) => {
    list.map(favorite => {
        movieItem = document.createElement("li");
        movieItem.innerText = favorite.title;
        myFavoriteMovie.appendChild(movieItem);
    });
};
getMyFavoriteMovie().then(result => addMyFavoriteMovieToDom(result));


//  Functions to get and add the ten top rated movies to Dom:
const addTopRatedMoviesToDom = (list) => {
    list.slice(0, 10) 
        .map(movies => {
            movieItem = document.createElement("li");
            movieItem.innerText = movies.title;
            topRatedMovies.appendChild(movieItem);
        });
};

getTopRatedMovies().then(result => addTopRatedMoviesToDom(result));


//  Functions to get and add the ten top rated action movies to Dom:
const addTopRatedActionMoviesToDom = (list) => {
    list.slice(0, 10)
        .map(result => {
            actionMovies = document.createElement("li");
            actionMovies.innerText = result.title;
            topRatedActionMovies.appendChild(actionMovies);
        });
};

getTopRatedActionMovies().then(result => addTopRatedActionMoviesToDom(result));


//  Functions to get and add the ten top rated movies from 1975 to Dom:
const add1975moviesToDom = (list) => {
    list.slice(0, 10)
        .map(result => {
            madeIn1975 = document.createElement("li");
            madeIn1975.innerText = result.title;
            madeIn1975Movies.appendChild(madeIn1975);
        });
};

getMadeIn1975Movies().then(result => add1975moviesToDom(result));
