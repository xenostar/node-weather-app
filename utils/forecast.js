const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=8373aad99f4f7d50ebee509ecc192136&units=f&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (response.body.error) {
      callback("Unable to find forecast for location.");
    } else {
      callback(undefined, {
        weather_descriptions: response.body.current.weather_descriptions[0],
        temperature: response.body.current.temperature,
        feels_like: response.body.current.feelslike,
        summary: `${response.body.current.weather_descriptions[0]} - It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`,
      });
    }
  });
};

module.exports = forecast;
