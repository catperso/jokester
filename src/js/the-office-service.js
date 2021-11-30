export default class TheOfficeService {
  static getTheOfficeRandom() {
    return fetch (`https://officeapi.dev/api/quotes/random`)
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

  static getTheOfficeSearch(input) {
    return fetch (`https://officeapi.dev/api/quotes/:id/${input}`)
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