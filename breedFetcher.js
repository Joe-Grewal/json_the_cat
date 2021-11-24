const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      return callback(error);
    } else {
      const data = JSON.parse(body);
      if (data.length !== 0) {
        return callback(null, data[0].description);
      } else {
        return callback('That is not a valid cat breed');
      }
    }
  });
};

module.exports = { fetchBreedDescription };