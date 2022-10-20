// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let mapped = moviesArray.map((elemento) => elemento.director);
  return mapped;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let filtredArr = moviesArray.filter(
    (elemento) =>
      elemento.director === 'Steven Spielberg' &&
      elemento.genre.includes('Drama')
  );
  //console.log(filtredArr.length, '<--it 2');
  return filtredArr.length;
}

const moviesTeste = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 8,
  },
  {
    title: 'The Godfather',
    year: 2000,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 'fsadf',
  },
  {
    title: 'The Godfather',
    year: 1995,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 'fsadf',
  },
];

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray, eFloat) {
  if (moviesArray.length === 0) return 0;
  let noNumber = 0;
  let somaScore = moviesArray.reduce((accumulator, currentObject) => {
    if (typeof currentObject.score === 'number') {
      return accumulator + currentObject.score;
    } else {
      noNumber++;
      return accumulator;
    }
  }, 0);
  /*console.log(
    Math.round(100 * (somaScore / (moviesArray.length - noNumber))) / 100);   mais certo seria excluir os casos q não são números*/
  // para reutilizar a função
  if (eFloat == undefined) {
    return Math.round((100 * somaScore) / moviesArray.length) / 100;
  }
  console.log(' é float');
  console.log(somaScore / moviesArray.length);
  return somaScore / moviesArray.length;

  // arredonda antes de retornar
}

//console.log(scoresAverage(moviesTeste), '<-average');
console.log('*********************************');
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMoviesArray = moviesArray.filter((cadaObjeto) =>
    cadaObjeto.genre.includes('Drama')
  );
  //console.log(scoresAverage(dramaMoviesArray, true), '<float');
  // incluido o efloat no scoresAverage(,eFloat) para reaproveitar codigo
  return scoresAverage(dramaMoviesArray, true);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let auxArray = Array.from(moviesArray);
  auxArray.sort((objetoA, objetoB) => {
    if (objetoA.year != objetoB.year) {
      return objetoA.year - objetoB.year;
    } else {
      return objetoA.title.localeCompare(objetoB.title);
    }
  });
  //console.log(auxArray);
  return auxArray;
}
orderByYear(moviesTeste);
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let auxArray = Array.from(moviesArray);
  auxArray.sort((objetoA, objetoB) => {
    return objetoA.title.localeCompare(objetoB.title);
  });
  console.log(auxArray);
  //if (auxArray.length > 20) {}
  // mapeia so o titulo e corta até o 20th elemento
  return auxArray
    .map((cadaObjeto) => cadaObjeto.title)
    .slice(0, Math.min(20, auxArray.length));
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
