const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const [locationArg] = process.argv.slice(2);

if (locationArg) {
  geocode(locationArg, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, { summary } = {}) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(summary);
    });
  });
} else {
  console.log("Please provide an address.");
}
