'use strict';

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $('.intro').addClass('hidden');
    getDinner();
    getDrink();
  });
}

function getDinner() {
    fetch('https://api.spoonacular.com/recipes/random?number=3&tags=dinner&apiKey=3189deaed56f4d3fbcff0482cb212351')
      .then(responseDinner => responseDinner.json())
      .then(responseDinnerJson => displayMeal(responseDinnerJson)
      .catch(err=> {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
      })
      );
  }
function getDrink() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(responseDrink => responseDrink.json())
        .then(responseDrinkJson => displayDrink(responseDrinkJson))
        .catch(err =>{
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });
} 

function displayMeal(responseDinnerJson) {
    //clears the result and appends the returned meal
    $('.js-dinner-results')
        .html('')
        .append(`this is a meal test`);
    
        //display the results section
    $('.dinner-results').removeClass('hidden');
}

function displayDrink(responseDrinkJson) {
     //clears the result and appends the returned meal
     $('.js-drink-results')
     .html('')
     .append(`this is a drink test`);
 
     //display the results section
 $('.drink-results').removeClass('hidden');
} 

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
