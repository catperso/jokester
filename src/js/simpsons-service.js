export default class SimpsonsService {
  static getSimpsonsRandom() {
    return fetch (`https://thesimpsonsquoteapi.glitch.me/quotes`)
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