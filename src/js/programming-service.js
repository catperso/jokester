export default class ProgrammingService {  
  static getRandomJoke() {
    return fetch(`https://v2.jokeapi.dev/joke/Programming?type=single&safe-mode`)
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
    return fetch(`https://v2.jokeapi.dev/joke/Programming?type=single&contains=${input}&safe-mode`)
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
