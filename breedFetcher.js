const request = require('request');

const input = process.argv.slice(2);
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const query = input[0];

request(url + query, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  } else {
    const data = JSON.parse(body);
    if (data.length !== 0) {
      console.log(data[0].description);
    } else {
      console.log('That is not a valid cat breed');
      return;
    }
  }
});