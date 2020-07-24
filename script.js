'use strict';

document.cookie = 'SameSite=None; Secure';

function watchForm() {
  $('.dinner-submit').click(event => {
    event.preventDefault();
    //$('.intro').addClass('hidden');
    getDinner();
    //getDrink();
  });
}

function watchDrink() {
    $('.drink-submit').click(event => {
      event.preventDefault();
      //$('.intro').addClass('hidden');
      getDrink();
    });
  }

function getDinner() {
    fetch('https://api.spoonacular.com/recipes/random?number=1&tags=dinner&apiKey=3189deaed56f4d3fbcff0482cb212351') 
      .then(responseDinner => responseDinner.json())
      .then(responseDinnerJson => displayMeal(responseDinnerJson))
      .catch(error=> {
        $('#js-error-message').text(`Something went wrong: ${error.message}`);
      });
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
    console.log(responseDinnerJson)
    $('.js-dinner-results')
        .html('')
        .append(`<h3>${responseDinnerJson.recipes[0].title}</h3><p>Ready In: ${responseDinnerJson.recipes[0].readyInMinutes} minutes</p><p>Serves ${responseDinnerJson.recipes[0].servings}</p><img src='${responseDinnerJson.recipes[0].image}' class= 'dinner-img' alt='picture of the dish'><br><a href='${responseDinnerJson.recipes[0].sourceUrl}' target="_blank">Link to Full Recipe</a>`);
        //display the results section
    $('.dinner-results').removeClass('hidden');
}

function displayDrink(responseDrinkJson) {
     //clears the result and appends the returned meal
     $('.js-drink-results')
     .html('')
     .append(`<h3>drink title</h3>`);
 
     //display the results section
 $('.drink-results').removeClass('hidden');
} 

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  watchDrink();
})
