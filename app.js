const geocode = require("./utils/geocode");
// const request = require("request");

// const weatherStackUrl =
//   "http://api.weatherstack.com/current?access_key=8373aad99f4f7d50ebee509ecc192136&units=f&query=San%20Francisco";

// request({ url: weatherStackUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location!");
//   } else {
//     console.log(
//       `${response.body.current.weather_descriptions[0]} - It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
//     );
//   }
// });

geocode("Philadelphia", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
