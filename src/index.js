import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RonSwansonService from "./js/ron-swanson-service.js";
import DadService from './js/dad-joke-service';
import ProgrammingService from "./js/programming-service";
import SimpsonsService from './js/simpsons-service';


function ronSwan(input) {
  if (input) {
    RonSwansonService.getRonSwanSearch(input)
      .then(function(ronResponse) {
        if (ronResponse instanceof Error) {
          throw Error(`Ron Swanson API error: ${ronResponse.message}`);
        }
        let randomRon = ronResponse.length - 1;
        let ronChoice = Math.floor(Math.random() * randomRon); /*random number between 0 and randomBob */ 
        const theJoke = ronResponse[ronChoice];
        displayJoke(theJoke);
        console.log(theJoke);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  } else {
    RonSwansonService.getRonSwanRandom()
      .then(function(ronResponse) {
        if (ronResponse instanceof Error) {
          throw Error(`Ron Swanson API error: ${ronResponse.message}`);
        }
        const theJoke = ronResponse[0];
        displayJoke(theJoke);
        console.log(theJoke);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  }
}

function programming(input) {
  if (input) {
    ProgrammingService.getSearchJoke(input)
      .then(function(programmingResponse) {
        if(programmingResponse instanceof Error) {
          throw Error (`Programming joke API error: ${programmingResponse.message}`);
        }
        const programmingJoke = programmingResponse.joke;
        displayJoke(programmingJoke);
        console.log(programmingJoke);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  } else {
    ProgrammingService.getRandomJoke()
      .then(function(programmingResponse) {
        if (programmingResponse instanceof Error) {
          throw Error(`Programming joke API error: ${programmingResponse.message}`);
        }
        const programmingJoke = programmingResponse.joke;
        displayJoke(programmingJoke);
        console.log(programmingJoke);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  }
}

function dadJoke(input) {
  if (input) {
    DadService.getSearchJoke(input)
      .then(function(dadResponse) {
        if(dadResponse instanceof Error) {
          throw Error (`Dad Joke API error: ${dadResponse.message}`);
        }
        let randomDad = dadResponse.results.length - 1;
        let dadChoice = Math.floor(Math.random() * randomDad);
        const dadJoke = dadResponse.results[dadChoice].joke;
        displayJoke(dadJoke);
        console.log(dadJoke);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  } else {
    DadService.getRandomJoke()
      .then(function(dadResponse) {
        if (dadResponse instanceof Error) {
          throw Error(`Dad Joke API error: ${dadResponse.message}`);
        }
        const dadJoke = dadResponse.joke;
        displayJoke(dadJoke);
        console.log(dadJoke);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  }
}

function simpsons() {
  SimpsonsService.getSimpsonsRandom()
    .then(function(simpsonsResponse) {
      if (simpsonsResponse instanceof Error) {
        throw Error (`Simpson quote API error: ${simpsonsResponse.message}`);
      }
      const simpsonsJoke = simpsonsResponse[0].quote;
      const simpsonsImage = simpsonsResponse[0].image;
      displayJoke(simpsonsJoke);
      displayImage(simpsonsImage);
      console.log(simpsonsJoke);
      console.log(simpsonsImage);
    })
    .catch(function(error) {
      displayErrors(error.message);
    });
}

function displayJoke(joke) {
  $('.result').text(joke);
}

function displayErrors() {

}

function displayImage(img) {
  $('.simpsonImg').html(`<img src=${img} class='simp'>`);
}

function clearAllFields() {
  $('input').val('');
  $('.result').text('');
  $('.simpsonImg').html('');
  $('.error').text('');
}

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    clearAllFields();
  });
  $('#probtn').click(function() {
    let progInput = $('#prog').val();
    programming(progInput);
  });
  $('#probtn2').click(function() {
    programming('');
  });
  $('#dadbtn').click(function() {
    let dadInput = $('#dad').val();
    dadJoke(dadInput);
  });
  $('#dadbtn2').click(function() {
    dadJoke('');
  });
  $('#ronbtn').click(function() {
    let ronInput = $('#rons').val();
    ronSwan(ronInput);
  });
  $('#ronbtn2').click(function() {
    ronSwan('');
  });
  $('#simpbtn').click(function() {
    simpsons('');
  });
});    