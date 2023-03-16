const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (err, response, body) => {
    if (err) {
      console.log(err);
      return;
    }

    const data = JSON.parse(body);

    if (data[0] === undefined) {
      callback(err, "Not found");
      return;
    }
    const parseData = data[0];
    callback(err, parseData["description"]);
  });
};

module.exports = { fetchBreedDescription };