const request = require('request');

const getAPI = function(callback) {
  request( `https://api.thecatapi.com/v1/images/search`, (error, response, body) => {
    if (error) return callback(error, null);

    const data = JSON.parse(body);
    console.log(data)
  })
}

// PRINT OUT THE BODY CONTENT TO TERMINAL => BODY IS STRING
// convert the string into an object!!


getAPI((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  const data = JSON.parse(body);
  console.log(data);
});