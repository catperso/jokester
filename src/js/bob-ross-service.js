export default class BobRossService {
  static getBobRossRandom() {
    return fetch (`https://api.bobross.dev/api`)
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

  static getBobRossSearch(userInput) {
    return fetch (`https://api.bobross.dev/api/search/${userInput}`)
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