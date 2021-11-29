export default class DadService {  
  static getRandomJoke() {
    return fetch(`https://icanhazdadjoke.com/`, { headers: { 'Accept': 'application/json' } })
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
  }

  static getSearchJoke(input) {
    return fetch(`https://icanhazdadjoke.com/search?term=${input}`, { headers: { 'Accept': 'application/json' } })
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
  }
}