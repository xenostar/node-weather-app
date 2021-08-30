const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=8373aad99f4f7d50ebee509ecc192136&query=San%20Francisco";

request({ url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
