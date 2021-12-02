export default class MemeService {
  static getMemeRandom() {
    return fetch (`https://meme-api.herokuapp.com/gimme/wholesomememes`)
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