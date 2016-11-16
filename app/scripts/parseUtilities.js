

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


module.exports = {
  setupParse: setupParse
}
