const request = require("request");

const weatherStackUrl =
  "http://api.weatherstack.com/current?access_key=8373aad99f4f7d50ebee509ecc192136&query=San%20Francisco&units=f";

// request({ url: weatherStackUrl, json: true }, (error, { body }) => {
//   console.log(
//     `${body.current.weather_descriptions[0]} - It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`
//   );
// });

const mapBoxUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieGVub3N0YXIiLCJhIjoiY2tzenBlbXhiMHV1bTJwcnI1eDJldmxhZSJ9.y-fYeE9tl7SlpKGnM66TJA&limit=1";

request({ url: mapBoxUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];

    console.log(
      `The coordinates for "${response.body.features[0].place_name}" is ${latitude}, ${longitude}.`
    );
  }
});
