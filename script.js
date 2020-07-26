'use strict';

document.cookie = 'SameSite=None; Secure';

function watchForm() {
  $('.init-submit-btn').click(event => {
    event.preventDefault();
    $('.start').removeClass('start').addClass('hidden');
    $('.vl').removeClass('hidden')
    $('.js-intro').text("Don't quite like what was picked, just pick again!");
    getDinner();
    getDessert();
    displayDessert();
    displayDinner();
  });
}

function watchDinner() {
  $('.dinner-submit').click(event => {
    event.preventDefault();
    //$('.intro').addClass('hidden');
    getDinner();
  });
}

function watchDessert() {
    $('.dessert-submit').click(event => {
      event.preventDefault();
      //$('.intro').addClass('hidden');
      getDessert();
    });
  }

function getDinner() {
    fetch('https://api.spoonacular.com/recipes/random?number=1&tags=dinner&apiKey=3189deaed56f4d3fbcff0482cb212351') 
      .then(responseDinner => responseDinner.json())
      .then(responseDinnerJson => displayDinner(responseDinnerJson))
      .catch(error=> {
        $('#js-error-message').text(`Something went wrong: ${error}`);
      });
    }

function getDessert() {
    fetch('https://api.spoonacular.com/recipes/random?number=1&tags=dessert&apiKey=3189deaed56f4d3fbcff0482cb212351')
        .then(responseDessert => responseDessert.json())
        .then(responseDessertJson => displayDessert(responseDessertJson))
        .catch(err =>{
            $('#js-error-message').text(`Something went wrong: ${err}`);
        });
} 

function displayDinner(responseDinnerJson) {
    //clears the result and appends the returned meal
    console.log(responseDinnerJson)
    $('.js-dinner-results')
        .html('')
        .append(`<h3>${responseDinnerJson.recipes[0].title}</h3><p>Ready In: ${responseDinnerJson.recipes[0].readyInMinutes} minutes</p><p>Serves ${responseDinnerJson.recipes[0].servings}</p><img src='${responseDinnerJson.recipes[0].image}' class= 'dinner-img' alt='picture of the dinner dish'><br><a href='${responseDinnerJson.recipes[0].sourceUrl}' target="_blank">Link to Full Recipe</a>`);
        //display the results section
    $('.dinner-results').removeClass('hidden');
}

function displayDessert(responseDessertJson) {
     //clears the result and appends the returned meal
     console.log(responseDessertJson)
     $('.js-dessert-results')
     .html('')
     .append(`<h3>${responseDessertJson.recipes[0].title}</h3><p>Ready In: ${responseDessertJson.recipes[0].readyInMinutes} minutes</p><p>Serves ${responseDessertJson.recipes[0].servings}</p><img src='${responseDessertJson.recipes[0].image}' class= 'desert-img' alt='picture of the dessert dish'><br><a href='${responseDessertJson.recipes[0].sourceUrl}' target="_blank">Link to Full Recipe</a>`);
 
     //display the results section
 $('.dessert-results').removeClass('hidden');
} 

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  watchDinner();
  watchDessert();
})
