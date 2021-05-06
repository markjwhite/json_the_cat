const request = require('request');
const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=` + breed, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (response.statusCode !== 200) {
      error = (`statusCode: ${response} ${response.statusCode}`);
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      error = ('Failed to find breed.');
      callback(error, null);
    } else {
      callback(null, data[0].description);
    }

  });
};

module.exports = { fetchBreedDescription };