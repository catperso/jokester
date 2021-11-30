import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BobRossService from "./js/exchangerate.js";
import DadService from './js/dad-joke-service';
import ProgrammingService from "./js/programming-service";


function bobRoss(input) {
  if (input) {
    BobRossService.getBobRossSearch(input)
      .then(function(bobResponse) {
        if (bobResponse instanceof Error) {
          throw Error(`Bob Ross API error: ${bobResponse.message}`);
        }
        let randomBob = bobResponse.response.length - 1;
        let bobChoice = Math.floor(Math.random() * randomBob); /*random number between 0 and randomBob */ 
        const theJoke = bobResponse.response[bobChoice].quote;
        displayJoke(theJoke);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  } else {
    BobRossService.getBobRossRandom()
      .then(function(bobResponse) {
        if (bobResponse instanceof Error) {
          throw Error(`Bob Ross API error: ${bobResponse.message}`);
        }
        const theJoke = bobResponse.response[0].quote;
        displayJoke(theJoke);
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
    })
    .catch(function(error) {
      displayErrors(error.message);
    });
  } else {
    ProgrammingService.getRandomJoke()
      .then(function(programmingResponse) {
        if (programmingResponse instanceof Error) {
          throw Error(`Prgramming joke API error: ${programmingResponse.message}`);
        }
        const programmingJoke = programmingJoke.joke;
        displayJoke(programmingJoke);
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
      const dadJoke = dadResponse.results.joke;
      displayJoke(dadJoke);
    })
    .catch(function(error) {
      displayErrors(error.message);
    });
  }
}

function simpsons () {
  SimpsonsService.getSimpsonsRandom()
  .then(function(simpsonsResponse) {
    if (simpsonsResponse instanceof Error) {
      throw Error (`Simpson quote API erre : ${simpsonsResponse.message}`);
    }
    const simpsonsJoke = simpsonsResponse.quote;
    const simpsonsImage = simpsonsResponse.image;
    displayJoke(simpsonsJoke);
    displayImage(simpsonsImage);
  })
  .catch(function(error) {
    displayErrors(error.message);
  });
}



$(document).ready(function() {
  $('#jokeType').click(function() {

  });
});    