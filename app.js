const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const [locationArg] = process.argv.slice(2);

if (locationArg) {
  geocode(locationArg, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(data.location);
      console.log(forecastData.summary);
    });
  });
} else {
  console.log("Please provide an address.");
}
