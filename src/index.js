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
      });
  }
}



$(document).ready(function() {
  $('#jokeType').click(function() {




  });
});    