const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(index => index.director);
  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let movie = array.filter(movieDirector => movieDirector.director === director);
  // console.log("EXERCICE 2 ->", movie);
  return movie;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let getDirector = getMoviesFromDirector(array, director);
  let valorScore = getDirector.map(getScore => getScore.score);

  let initialScore = 0;
  let sumScore = valorScore.reduce((valorAnterior, valorActual) => valorAnterior + valorActual, initialScore);

  let totalScore = Number((sumScore / valorScore.length).toFixed(2));
    
    // console.log("EXERCICE 3 ->", typeof totalScore);
    return totalScore;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
  let orderMovies = array.sort();
  
  let getTitle = orderMovies.map(index => index.title);
  let newOrder = getTitle.sort();

  let showTwentyTitle = newOrder.slice(0, 20);

  // console.log("EXERCICE 4 ->", newOrder.length);
  
  return showTwentyTitle;
  }
  

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let getYear = array.map(year => year);

  let orderMoviesForYear = getYear.sort((a, b) => {
    if(a.year === b.year) {
      if(a.title > b.title){
        return 1;
      } else{
        return -1;
      }
    }
    return a.year - b.year;
  });

  console.log("EXERCICE 5 ->", orderMoviesForYear);
  return orderMoviesForYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {

  // let getGenre =  array.filter(movieGenre => movieGenre.genre);

  // let averageDirector = moviesAverageOfDirector(array, director);


  // // let reduceGenre = getGenreScore.reduce((valorAnterior, valorActual) => valorAnterior + valorActual);
  

  // console.log("EXERCICE 6 ->", averageDirector);
  // return averageDirector;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
