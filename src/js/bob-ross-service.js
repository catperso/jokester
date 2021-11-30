export default class RonSwansonService {
  static getRonSwanRandom() {
    return fetch (`https://ron-swanson-quotes.herokuapp.com/v2/quotes/`)
      .then (function(response) {
        if (!response.ok) {
          throw Error (response.statusText);
        }
        return response.json();  
      })
      .catch (function(error) {
        return Error(error);
      }); 
  }

  static getRonSwanSearch(input) {
    return fetch (`https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/${input}`)
      .then (function(response) {
        if (!response.ok) {
          throw Error (response.statusText);
        }
        return response.json();  
      })
      .catch (function(error) {
        return Error(error);
      }); 
  }
}