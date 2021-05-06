const request = require('request');
let args = process.argv.slice(2);

//creates url by adding the search parameter breed
const breed = args[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
console.log(url);

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  console.log(data[0]);
  if (data) {
    console.log(data[0].description);
  } else {
    console.log('Error: Failed to find breed.');
  }
});