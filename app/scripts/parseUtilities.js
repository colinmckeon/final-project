

function setupParse(appId, apiKey, sessionId){
  $.ajaxSetup({
    beforeSend: function(xhr){
      xhr.setRequestHeader("X-Parse-Application-Id", appId);
      xhr.setRequestHeader("X-Parse-REST-API-Key", apiKey);

      if(sessionId){
        xhr.setRequestHeader("X-Parse-Session-Token", sessionId);
      }
    }
  });
}

// $.ajaxSetup({
//   beforeSend: function(xhr){
//     console.log('beforeSend mash');
//     xhr.setRequestHeader("X-Mashape-Key", "64ygDWoKx7mshue5RJgLaVom1n5lp12Bzfejsnkr3S0j0ATb5P");
//     xhr.setRequestHeader("Accept", "application/json");
//   }
// });
// $.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Ccover').then(function(data){
// console.log(data);

module.exports = {
  setupParse: setupParse
}
