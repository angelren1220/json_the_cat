const request = require('request');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(url, (err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Not found");
    return;
  }
  const parseData = data[0];
  console.log(parseData["description"]);
});