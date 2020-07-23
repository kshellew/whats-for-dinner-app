'use strict';

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDinner();
    getDrink();
  });
}

function getDinner() {
    fetch('https://api.spoonacular.com/recipes/random?number=3&tags=dinner&apiKey=3189deaed56f4d3fbcff0482cb212351')
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  }
function getDrink() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
