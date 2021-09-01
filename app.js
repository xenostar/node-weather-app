const request = require("request");

const weatherStackUrl =
  "http://api.weatherstack.com/current?access_key=8373aad99f4f7d50ebee509ecc192136&units=f&query=San%20Francisco";

request({ url: weatherStackUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Unable to find location!");
  } else {
    console.log(
      `${response.body.current.weather_descriptions[0]} - It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
    );
  }
});

const mapBoxUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/12wat.json?access_token=pk.eyJ1IjoieGVub3N0YXIiLCJhIjoiY2tzenBlbXhiMHV1bTJwcnI1eDJldmxhZSJ9.y-fYeE9tl7SlpKGnM66TJA&limit=1";

request({ url: mapBoxUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try another search.");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];

    console.log(
      `The coordinates for "${response.body.features[0].place_name}" is [${latitude},${longitude}].`
    );
  }
});
