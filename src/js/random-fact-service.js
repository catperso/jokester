export default class RandomFactService {
  static getRandomFact() {
    return fetch (`https://uselessfacts.jsph.pl/random.json?language=en`)
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