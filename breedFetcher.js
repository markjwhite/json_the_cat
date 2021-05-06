const request = require('request');
const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=` + breed, (error, response, body) => {
    if (error) {
      callback(error);
      process.exit;
    }
    if (response.statusCode !== 200) {
      error = (`statusCode: ${response} ${response.statusCode}`);
      callback(error);
      process.exit;
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      error = ('Failed to find breed.');
      callback(error);
      process.exit;
    }
    callback(error, data[0].description);
  });
};

module.exports = { fetchBreedDescription };