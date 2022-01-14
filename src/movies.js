// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let directors = arr.map ((currentElement) => {
    return currentElement.director
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let Spilberd = arr.filter((currentElement) => {
    return currentElement.director === "Steven Spielberg" 
  })
  let dramaMovies = 0;
  for (i = 0; i < Spilberd.length; i++){
    for (j = 0; j < Spilberd[i].genre.length; j++)
      if (Spilberd[i].genre[j] === "Drama") {
        dramaMovies++
      }
  }
  return dramaMovies
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    const grades = arr.reduce((acc, currentNum) => {
    return acc + currentNum.score;
    }, 0)
    return Math.round((grades/arr.length) *100) /100
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr){
  const dramas = arr.filter((item) => {
    return (item.genre.indexOf("Drama") >= 0);
  })

  const scoreDramas = dramas.reduce((a, b) => {
    return a + b.score;
  },0)

  return Math.round((scoreDramas / dramas.length) * 100)/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const years = arr.sort((year1, year2) => {
    return year1.year - year2.year;
  })
  return years
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let newArr = arr.sort((str1, str2) => {
    return str1.title.localeCompare(str2.title);
  });
  return newArr
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
